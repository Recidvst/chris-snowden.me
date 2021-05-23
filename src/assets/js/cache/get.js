import isCacheAvailable from './isCacheAvailable';
import { deleteCacheItem } from './delete';
import isValidURL from './isValidURL';

// READ CACHE ITEM (AND CONVERT BUFFER TO USABLE OBJECTURL)
async function getCacheItem(cacheName = window.location.hostname, imageURL) {
  // return new Promise( async function(resolve) {
  if (!isCacheAvailable || typeof imageURL === 'undefined' || !isValidURL(imageURL) ) return false;

  const options = {
    ignoreSearch: false,
    ignoreMethod: true,
    ignoreVary: false,
  };

  const cache = await caches.open(`${cacheName}__imgaide`);
  const response = await cache.match(imageURL, options);
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
    if (responseJSON.timestamp < (today - 60000)) {
      deleteCacheItem();
      return false;
    }

    if (!responseJSON.error && responseJSON.buffer) {
      // returned from the cache as type ArrayBuffer (Node)
      const buffer = responseJSON.buffer.data || responseJSON.buffer
      // cache is stored as a buffer, so need to pull it out as such and convert
      const arrayBufferView = new Uint8Array(buffer);
      // convert to an ObjectURL
      const ObjectURL = await bufferToImageURL(arrayBufferView);

      return ObjectURL;
    }
    else {
      return false;
    }
  }
  else {
    return false;
  }
  // });
}

export {
  getCacheItem
}
