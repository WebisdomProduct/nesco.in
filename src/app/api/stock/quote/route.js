import { getPersistentCache, setPersistentCache } from '../../../../utils/persistentCache';

const ALPHA_VANTAGE_API_KEY = '76M34K2003RZNXPT';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const exchange = searchParams.get('exchange') || 'nse';

    // Map internal exchange codes to Alpha Vantage symbols
    // Alpha Vantage typically supports 'Symbol.BSE' or 'Symbol.NSE' (or just 'Symbol' for US)
    // For Indian stocks: 'NESCO.BSE', 'NESCO.NSE' are correct.
    const symbolMap = {
      nse: '505355.BSE', // Force BSE code as NESCO.NSE/NESCO.BSE failing
      bse: '505355.BSE',
    };

    const symbol = symbolMap[exchange.toLowerCase()];
    if (!symbol) {
      return Response.json(
        { error: 'Invalid exchange. Use "nse" or "bse"' },
        { status: 400 }
      );
    }

    const cacheKey = `quote_${exchange}`;

    // 1. Try to get valid data from cache
    const cachedData = getPersistentCache(cacheKey);
    if (cachedData) {
      return Response.json({ ...cachedData, fromCache: true });
    }

    console.log(`Fetching fresh Quote data from Alpha Vantage for ${symbol}...`);

    // 2. Fetch from Alpha Vantage
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Alpha Vantage API error: ${response.status} ${response.statusText}`);
    }

    const jsonData = await response.json();

    // Check for API errors or Rate Limit messages
    if (jsonData['Error Message']) {
      throw new Error(jsonData['Error Message']);
    }
    if (jsonData['Note']) { // Rate limit note
      console.warn('Alpha Vantage Rate Limit/Note:', jsonData['Note']);
      // If we hit rate limit, maybe throw or return old cache? 
      // Current logic: throwing will eventually return 500, but we want to fail gracefully.
      // But for now let's just throw to see failure logs if any.
      throw new Error(`Alpha Vantage API Note: ${jsonData['Note']}`);
    }

    const globalQuote = jsonData['Global Quote'];
    if (!globalQuote || Object.keys(globalQuote).length === 0) {
      throw new Error('No Global Quote data found');
    }

    // 3. Transform data
    // Alpha Vantage returns keys like "01. symbol", "05. price"
    const data = transformAlphaVantageQuote(globalQuote, exchange);

    // 4. Save to cache
    setPersistentCache(cacheKey, data);

    return Response.json(data);

  } catch (error) {
    console.error('Error in Quote API:', error);
    return Response.json(
      { error: 'Failed to fetch quote data', details: error.message },
      { status: 500 }
    );
  }
}

function transformAlphaVantageQuote(data, exchange) {
  // data keys example:
  // "01. symbol": "NESCO.BSE",
  // "02. open": "123.45",
  // "03. high": "125.00",
  // "04. low": "122.00",
  // "05. price": "124.50",
  // "06. volume": "1000",
  // "07. latest trading day": "2024-01-01",
  // "08. previous close": "123.00",
  // "09. change": "1.50",
  // "10. change percent": "1.22%"

  const price = parseFloat(data['05. price']) || 0;
  const prevClose = parseFloat(data['08. previous close']) || 0;

  return {
    symbol: data['01. symbol'],
    regularMarketPrice: price,
    regularMarketPreviousClose: prevClose,
    regularMarketOpen: parseFloat(data['02. open']) || 0,
    regularMarketDayHigh: parseFloat(data['03. high']) || 0,
    regularMarketDayLow: parseFloat(data['04. low']) || 0,
    regularMarketVolume: parseInt(data['06. volume']) || 0,
    // Alpha Vantage Global Quote doesn't give 52-week directly. 
    // We can omit or default them to 0 (or Day High/Low as fallback for visual safety)
    fiftyTwoWeekHigh: 0,
    fiftyTwoWeekLow: 0,
    currency: 'INR', // Safe assumption for NSE/BSE
    exchange: exchange.toUpperCase(),
    name: 'NESCO Limited',
    datetime: new Date().toISOString(),
    change: parseFloat(data['09. change']) || 0,
    changePercent: parseFloat((data['10. change percent'] || '').replace('%', '')) || 0
  };
}
