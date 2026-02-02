// In-memory cache with TTL (Time To Live) for stock data
// This helps reduce API calls and improve response times

const cache = new Map();

// Request tracking to prevent too many simultaneous requests
const pendingRequests = new Map();
const requestTimestamps = [];

// Cache TTL in milliseconds - Increased significantly to reduce API calls
const CACHE_TTL = {
  quote: 30 * 60 * 1000, // 30 minutes for quotes (increased from 10)
  chart: 60 * 60 * 1000, // 60 minutes for charts (increased from 30)
};

// Rate limiting: Max requests per time window - Very conservative to avoid 429 errors
const RATE_LIMIT = {
  maxRequests: 2, // Maximum requests (reduced from 10)
  windowMs: 60 * 1000, // Per 60 seconds
  minDelayBetweenRequests: 30000, // Minimum 30 seconds between requests
};

// Track last request time
let lastRequestTime = 0;

/**
 * Get data from cache if it exists and hasn't expired
 * @param {string} key - Cache key
 * @returns {Object|null} Cached data or null if not found/expired
 */
export function getFromCache(key) {
  const cached = cache.get(key);
  
  if (!cached) {
    return null;
  }

  const now = Date.now();
  if (now > cached.expiresAt) {
    // Cache expired, but don't delete it - we might need it as fallback
    return null;
  }

  return cached.data;
}

/**
 * Get stale cache data (even if expired) - useful as fallback when API fails
 * @param {string} key - Cache key
 * @param {number} maxStaleAge - Maximum age in ms for stale data (default: 1 hour)
 * @returns {Object|null} Stale cached data or null
 */
export function getStaleCache(key, maxStaleAge = 60 * 60 * 1000) {
  const cached = cache.get(key);
  
  if (!cached) {
    return null;
  }

  const now = Date.now();
  const age = now - cached.expiresAt;
  
  // Return stale data if it's not too old
  if (age > 0 && age < maxStaleAge) {
    return cached.data;
  }

  return null;
}

/**
 * Store data in cache with TTL
 * @param {string} key - Cache key
 * @param {Object} data - Data to cache
 * @param {string} type - Cache type ('quote' or 'chart')
 */
export function setCache(key, data, type = 'quote') {
  const ttl = CACHE_TTL[type] || CACHE_TTL.quote;
  const expiresAt = Date.now() + ttl;

  cache.set(key, {
    data,
    expiresAt,
    type,
  });
}

/**
 * Check if we're within rate limits
 * @returns {boolean} True if we can make a request
 */
function canMakeRequest() {
  const now = Date.now();
  
  // Remove old timestamps outside the window
  while (requestTimestamps.length > 0 && 
         now - requestTimestamps[0] > RATE_LIMIT.windowMs) {
    requestTimestamps.shift();
  }
  
  // Check if we're under the limit
  return requestTimestamps.length < RATE_LIMIT.maxRequests;
}

/**
 * Record a request timestamp
 */
function recordRequest() {
  const now = Date.now();
  requestTimestamps.push(now);
  
  // Clean up old timestamps
  while (requestTimestamps.length > 0 && 
         now - requestTimestamps[0] > RATE_LIMIT.windowMs) {
    requestTimestamps.shift();
  }
}

/**
 * Wait until we can make a request (rate limiting)
 * @returns {Promise<void>}
 */
async function waitForRateLimit() {
  const now = Date.now();
  
  // Enforce minimum delay between requests
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < RATE_LIMIT.minDelayBetweenRequests) {
    const waitTime = RATE_LIMIT.minDelayBetweenRequests - timeSinceLastRequest;
    console.log(`Enforcing minimum delay: waiting ${waitTime}ms...`);
    await new Promise((resolve) => setTimeout(resolve, waitTime));
  }
  
  // Check rate limit window
  while (!canMakeRequest()) {
    const oldestTimestamp = requestTimestamps[0];
    const waitTime = RATE_LIMIT.windowMs - (Date.now() - oldestTimestamp) + 100;
    console.log(`Rate limit reached, waiting ${waitTime}ms...`);
    await new Promise((resolve) => setTimeout(resolve, Math.max(waitTime, 100)));
  }
  
  lastRequestTime = Date.now();
}

/**
 * Retry a function with exponential backoff and rate limiting
 * @param {Function} fn - Async function to retry
 * @param {number} maxRetries - Maximum number of retries
 * @param {number} initialDelay - Initial delay in milliseconds
 * @returns {Promise} Result of the function
 */
export async function retryWithBackoff(fn, maxRetries = 3, initialDelay = 2000) {
  let lastError;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Wait for rate limit before making request
      await waitForRateLimit();
      recordRequest();
      
      return await fn();
    } catch (error) {
      lastError = error;
      
      // Don't retry on certain errors (e.g., 400 Bad Request)
      if (error.status === 400 || error.statusCode === 400) {
        throw error;
      }
      
      // If this was the last attempt, throw the error
      if (attempt === maxRetries) {
        throw error;
      }
      
      // Check for rate limit errors (429) - check status code and message
      const isRateLimited = 
        error.status === 429 || 
        error.statusCode === 429 ||
        (error.message && error.message.includes('429')) ||
        (error.message && error.message.includes('Too Many Requests'));
      
      // For rate limit errors, use much longer backoff and don't retry immediately
      if (isRateLimited) {
        // Wait at least 60 seconds before retrying after a 429 error
        const delay = 60000 + (attempt * 30000); // 60s, 90s, 120s...
        console.log(
          `Rate limited (429) - waiting ${delay}ms before retry ${attempt + 1}/${maxRetries}...`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        // For other errors, use exponential backoff
        const baseDelay = initialDelay;
        const delay = baseDelay * Math.pow(2, attempt);
        console.log(
          `Attempt ${attempt + 1} failed, retrying in ${delay}ms...`,
          error.message
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  }
  
  throw lastError;
}

/**
 * Get or create a pending request promise (deduplication)
 * @param {string} key - Cache key
 * @param {Function} fn - Async function to execute
 * @returns {Promise} Result of the function
 */
export async function getOrCreateRequest(key, fn) {
  // If there's already a pending request for this key, wait for it
  if (pendingRequests.has(key)) {
    console.log(`Deduplicating request for ${key}`);
    return pendingRequests.get(key);
  }
  
  // Create new request
  const requestPromise = (async () => {
    try {
      return await fn();
    } finally {
      // Remove from pending requests after completion
      pendingRequests.delete(key);
    }
  })();
  
  pendingRequests.set(key, requestPromise);
  return requestPromise;
}

/**
 * Clear all cache entries
 */
export function clearCache() {
  cache.clear();
}

/**
 * Clear cache entries by type
 * @param {string} type - Cache type to clear
 */
export function clearCacheByType(type) {
  for (const [key, value] of cache.entries()) {
    if (value.type === type) {
      cache.delete(key);
    }
  }
}

