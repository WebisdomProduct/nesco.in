
import fs from 'fs';
import path from 'path';

const CACHE_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'stock-cache.json');

// TTL: ~4.8 hours to allow approx 5 fetches per day (24 / 5 = 4.8)
// 4.8 hours * 60 minutes * 60 seconds * 1000 ms
const CACHE_TTL = 4.8 * 60 * 60 * 1000;

/**
 * Ensures the cache directory exists and returns the cache file path.
 */
function ensureCacheFile() {
    const dir = path.dirname(CACHE_FILE_PATH);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    return CACHE_FILE_PATH;
}

/**
 * Reads the persistent cache from disk.
 * @returns {Object} The cache object or empty object if file doesn't exist/error.
 */
function readCache() {
    try {
        ensureCacheFile();
        if (fs.existsSync(CACHE_FILE_PATH)) {
            const data = fs.readFileSync(CACHE_FILE_PATH, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error reading stock cache:', error);
    }
    return {};
}

/**
 * Writes the cache object to disk.
 * @param {Object} cacheData 
 */
function writeCache(cacheData) {
    try {
        ensureCacheFile();
        fs.writeFileSync(CACHE_FILE_PATH, JSON.stringify(cacheData, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing stock cache:', error);
    }
}

/**
 * Gets data from the persistent cache.
 * @param {string} key Unique key for the data (e.g., "quote_nse", "chart_bse_1mo")
 * @returns {Object|null} Cached data if valid, null if expired or not found.
 */
export function getPersistentCache(key, includeStale = false) {
    const cache = readCache();
    const entry = cache[key];

    if (!entry) {
        return null;
    }

    const now = Date.now();
    if (now > entry.expiresAt) {
        if (includeStale) {
            console.log(`Cache expired for ${key}, but returning stale data as requested.`);
            return { ...entry.data, isStale: true, expiresAt: entry.expiresAt };
        }
        console.log(`Cache expired for ${key}. Expired at ${new Date(entry.expiresAt).toISOString()}, now ${new Date(now).toISOString()}`);
        return null;
    }

    console.log(`Serving from persistent cache for ${key}. Valid until ${new Date(entry.expiresAt).toISOString()}`);
    return entry.data;
}

/**
 * Saves data to the persistent cache.
 * @param {string} key Unique key for the data
 * @param {Object} data The data to store
 */
export function setPersistentCache(key, data) {
    const cache = readCache();
    const now = Date.now();
    const expiresAt = now + CACHE_TTL;

    cache[key] = {
        data,
        expiresAt,
        updatedAt: now
    };

    writeCache(cache);
    console.log(`Updated persistent cache for ${key}. Next fetch allowed after ${new Date(expiresAt).toISOString()}`);
}
