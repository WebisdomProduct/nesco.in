// Stock data fetcher for NESCO Limited - Fetches real data from API

// NESCO Stock Symbols
const NESCO_SYMBOLS = {
  nse: 'NESCO.NS',  // NSE symbol
  bse: 'NESCO.BO',  // BSE symbol
};

/**
 * Fetch current stock quote data
 * @param {string} exchange - 'nse' or 'bse'
 * @returns {Promise<Object>} Stock quote data
 */
export const fetchStockQuote = async (exchange = 'nse') => {
  try {
    const response = await fetch(`/api/stock/quote?exchange=${exchange}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching stock quote for ${exchange}:`, error);
    throw error;
  }
};

/**
 * Fetch historical chart data
 * @param {string} exchange - 'nse' or 'bse'
 * @param {string} period - '1d', '5d', '1mo', '3mo', '6mo', '1y', '2y', '5y', '10y', 'ytd', 'max'
 * @returns {Promise<Array>} Historical price data
 */
export const fetchChartData = async (exchange = 'nse', period = '1mo') => {
  try {
    // Map UI period names to API period format
    const periodMap = {
      'Today': '1d',
      '1 Month': '1mo',
      '3 Months': '3mo',
      '6 Months': '6mo',
      '1 Year': '1y',
      '3 Years': '2y',
      'Custom': '1mo',
    };

    const apiPeriod = periodMap[period] || period;

    const response = await fetch(
      `/api/stock/chart?exchange=${exchange}&period=${apiPeriod}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // If 'Today' (1d) returns no data, fallback to last 5d and pick the latest available
    if (apiPeriod === '1d' && (!data.quotes || data.quotes.length === 0)) {
      const fallbackResp = await fetch(`/api/stock/chart?exchange=${exchange}&period=5d`);
      if (fallbackResp.ok) {
        const fallbackData = await fallbackResp.json();
        // Pick the last available quote (latest)
        if (fallbackData.quotes && fallbackData.quotes.length > 0) {
          return [fallbackData.quotes[fallbackData.quotes.length - 1]];
        }
      }
    }
    return data.quotes || [];
  } catch (error) {
    console.error(`Error fetching chart data for ${exchange}:`, error);
    throw error;
  }
};

/**
 * Transform quote data to component format
 * @param {Object} quoteData - Raw quote data from API
 * @returns {Object} Transformed data for components
 */
export const transformQuoteData = (quoteData) => {
  if (!quoteData) return null;

  const currentPrice = quoteData.regularMarketPrice || 0;
  const previousClose = quoteData.regularMarketPreviousClose || 0;
  const open = quoteData.regularMarketOpen || 0;
  const dayHigh = quoteData.regularMarketDayHigh || 0;
  const dayLow = quoteData.regularMarketDayLow || 0;
  const fiftyTwoWeekHigh = quoteData.fiftyTwoWeekHigh || 0;
  const fiftyTwoWeekLow = quoteData.fiftyTwoWeekLow || 0;
  const volume = quoteData.regularMarketVolume || 0;

  // Calculate change
  const changeValue = currentPrice - previousClose;
  const changePercent = previousClose ? ((changeValue / previousClose) * 100).toFixed(2) : 0;

  return {
    currentPrice: currentPrice.toFixed(2),
    previousClose: previousClose.toFixed(2),
    open: open.toFixed(2),
    dayHigh: dayHigh.toFixed(2),
    dayLow: dayLow.toFixed(2),
    fiftyTwoWeekHigh: fiftyTwoWeekHigh.toFixed(2),
    fiftyTwoWeekLow: fiftyTwoWeekLow.toFixed(2),
    volume: volume.toLocaleString(),
    change: changeValue.toFixed(2),
    changePercent: changePercent,
    currency: 'INR',
  };
};

/**
 * Transform chart data to component format
 * @param {Array} chartData - Raw chart data
 * @returns {Object} Transformed data for chart component
 */
export const transformChartData = (chartData) => {
  if (!Array.isArray(chartData) || chartData.length === 0) {
    return {
      labels: [],
      stockPrices: [],
      volumes: [],
    };
  }

  // Get last 30 days of data
  const recentData = chartData.slice(-30);

  return {
    labels: recentData.map((item) =>
      new Date(item.date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      })
    ),
    stockPrices: recentData.map((item) => parseFloat(item.close) || 0),
    volumes: recentData.map((item) => parseInt(item.volume, 10) || 0),
  };
};

/**
 * Fetch both NSE and BSE data simultaneously
 * @returns {Promise<Object>} Combined data for both exchanges
 */
export const fetchBothExchanges = async () => {
  try {
    const [nseData, bseData] = await Promise.all([
      fetchStockQuote('nse'),
      fetchStockQuote('bse'),
    ]);

    return {
      nse: transformQuoteData(nseData),
      bse: transformQuoteData(bseData),
    };
  } catch (error) {
    console.error('Error fetching both exchanges:', error);
    throw error;
  }
};
