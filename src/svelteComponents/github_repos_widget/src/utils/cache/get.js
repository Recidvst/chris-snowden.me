import isCacheAvailable from './isCacheAvailable';
import { deleteCacheItem } from './delete';
import isValidURL from './isValidURL';

// READ CACHE ITEM (AND CONVERT BUFFER TO USABLE OBJECTURL)
async function getCacheItem(cacheName = window.location.hostname, cacheURL) {
  // return new Promise( async function(resolve) {
  if (!isCacheAvailable || typeof cacheURL === 'undefined' || !isValidURL(cacheURL) ) return false;

  const options = {
    ignoreSearch: false,
    ignoreMethod: true,
    ignoreVary: false,
  };

  const cache = await caches.open(`${cacheName}`);
  const response = await cache.match(cacheURL, options);
  // if cache item found
  if (response) {
    // parse response
    const responseJSON = await response.json();

    // if cache should be invalidated due to expiry date
    const today = Date.now();
    const invalidateDaysPreference = parseInt(responseJSON.cacheexpiry);
    let invalidateTimestamp;
    // for days ( 5 chars was chosen as 1 minute (60000ms) seems the lowest reasonable value and more than 9999 days also seems unreasonable)
    if (invalidateDaysPreference.toString().length < 5) {
      invalidateTimestamp = invalidateDaysPreference * 24 * 60 * 60 * 1000;
    }
    // for milliseconds
    else {
      invalidateTimestamp = invalidateDaysPreference;
    }

    // if invalidated, delete cache item and resolve
    if (responseJSON.timestamp < (today - invalidateTimestamp)) {
      deleteCacheItem();
      return false;
    }

    if (!responseJSON.error && responseJSON.data) {
      return JSON.parse(responseJSON.data);
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
}

export {
  getCacheItem
}
