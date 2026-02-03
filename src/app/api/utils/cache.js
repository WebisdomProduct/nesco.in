// In-memory cache for API responses
const cache = new Map();

// Cache configuration
const CACHE_CONFIG = {
  quote: 5 * 60 * 1000, // 5 minutes for quotes (frequent updates)
  chart: 30 * 60 * 1000, // 30 minutes for chart data (less frequent updates)
};

/**
 * Get cached data if available and not expired
 */
export function getFromCache(key) {
  const cached = cache.get(key);
  if (cached && Date.now() < cached.expireAt) {
    return cached.data;
  }
  if (cached) {
    cache.delete(key);
  }
  return null;
}

/**
 * Store data in cache
 */
export function setCache(key, data, type = 'quote') {
  const ttl = CACHE_CONFIG[type] || CACHE_CONFIG.quote;
  cache.set(key, {
    data,
    expireAt: Date.now() + ttl,
  });
}

/**
 * Clear specific cache entry
 */
export function clearCache(key) {
  cache.delete(key);
}

/**
 * Clear all cache
 */
export function clearAllCache() {
  cache.clear();
}

/**
 * Retry logic with exponential backoff
 */
export async function retryWithBackoff(
  fn,
  maxRetries = 3,
  initialDelay = 1000
) {
  let lastError;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const statusCode = error.code || error.status;

      // Only retry on rate limit (429) and server errors (5xx)
      if (statusCode === 429 || statusCode >= 500) {
        const delay = initialDelay * Math.pow(2, attempt); // Exponential backoff
        const jitter = Math.random() * 1000; // Add random jitter (0-1s)
        const totalDelay = delay + jitter;

        console.warn(
          `Attempt ${attempt + 1}/${maxRetries} failed with status ${statusCode}. ` +
          `Retrying in ${Math.round(totalDelay)}ms...`
        );

        await new Promise((resolve) => setTimeout(resolve, totalDelay));
      } else {
        // Don't retry on client errors (4xx except 429)
        throw error;
      }
    }
  }

  throw lastError;
}
