import { getPersistentCache, setPersistentCache } from '../../../../utils/persistentCache';

const ALPHA_VANTAGE_API_KEY = '76M34K2003RZNXPT';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';
    const period = searchParams.get('period') || '1mo';

    const symbolMap = {
      nse: '505355.BSE', // Force BSE code as reliable fallback
      bse: '505355.BSE',
    };

    const symbol = symbolMap[exchange.toLowerCase()];
    if (!symbol) {
      return Response.json(
        { error: 'Invalid exchange. Use "nse" or "bse"' },
        { status: 400 }
      );
    }

    const cacheKey = `chart_${exchange}_${symbol}`; // Removed period from key to share history across periods

    // 1. Try to get valid fresh data
    const cachedData = getPersistentCache(cacheKey);
    if (cachedData && !cachedData.isStale) {
      // Filter data based on requested period if necessary? 
      // For now, client likely handles filtering, or we return all History.
      // Let's return all.
      return Response.json({ ...cachedData, fromCache: true });
    }

    console.log(`Fetching Chart data from Alpha Vantage for ${symbol}...`);

    // 2. Prepare for Fetch
    // Check if we have STALE data to decide between 'compact' and 'full'
    const staleData = getPersistentCache(cacheKey, true); // Get stale if exists
    const hasHistory = staleData && staleData.quotes && staleData.quotes.length > 200;

    // If we have > 200 days of history, we only need 'compact' (latest 100 days) to update.
    // Otherwise, fetch 'full' (20 years) to build history.
    const outputSize = hasHistory ? 'compact' : 'full';

    console.log(`Existing history length: ${staleData?.quotes?.length || 0}. Using outputsize=${outputSize}`);

    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=${outputSize}&apikey=${ALPHA_VANTAGE_API_KEY}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Alpha Vantage API error: ${response.status} ${response.statusText}`);
      }

      const jsonData = await response.json();

      if (jsonData['Error Message']) {
        throw new Error(jsonData['Error Message']);
      }
      if (jsonData['Note']) {
        throw new Error(`Alpha Vantage API Note: ${jsonData['Note']}`);
      }
      if (jsonData['Information']) {
        throw new Error(`Alpha Vantage API Info: ${jsonData['Information']}`);
      }

      const timeSeries = jsonData['Time Series (Daily)'];
      if (!timeSeries) {
        throw new Error('No Time Series data found in response');
      }

      // 3. Transform new data
      const dates = Object.keys(timeSeries).sort(); // Oldest first
      const newQuotes = dates.map(date => {
        const dp = timeSeries[date];
        return {
          date: date,
          open: parseFloat(dp['1. open']),
          high: parseFloat(dp['2. high']),
          low: parseFloat(dp['3. low']),
          close: parseFloat(dp['4. close']),
          volume: parseInt(dp['5. volume'])
        };
      });

      // 4. Merge with stale data
      let finalQuotes = newQuotes;
      if (hasHistory) {
        // Create a Map for existing quotes
        const quoteMap = new Map();
        staleData.quotes.forEach(q => quoteMap.set(q.date, q));

        // Overwrite with new quotes
        newQuotes.forEach(q => quoteMap.set(q.date, q));

        // Convert back to array and sort
        finalQuotes = Array.from(quoteMap.values()).sort((a, b) => new Date(a.date) - new Date(b.date));
      }

      const responseData = {
        quotes: finalQuotes,
        symbol,
      };

      // 5. Save merged data to cache
      setPersistentCache(cacheKey, responseData);

      return Response.json(responseData);

    } catch (apiError) {
      console.error("Alpha Vantage Fetch Failed:", apiError.message);

      // Fallback: If we have stale data, return it despite error
      if (staleData) {
        console.log("Serving stale data due to API failure.");
        return Response.json({
          ...staleData,
          fromCache: true,
          isStale: true,
          warning: "Data may be outdated due to API limits. " + apiError.message
        });
      }

      // No fallback possible
      return Response.json(
        { error: 'Failed to fetch chart data', details: apiError.message },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in Chart API:', error);
    return Response.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
