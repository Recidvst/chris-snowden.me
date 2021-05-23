import isCacheAvailable from './isCacheAvailable';
import isValidURL from './isValidURL';

// DELETE CACHE ITEM - SPECIFIC URL WITHIN CACHE BLOCK
function deleteCacheItem(cacheName = window.location.hostname, cacheURL) {
  if (!isCacheAvailable || typeof cacheURL === 'undefined' || !isValidURL(cacheURL) ) return false;

  caches.open(`${cacheName}`).then(cache => {
    cache.delete(cacheURL);
  })
}

export {
  // deleteCacheBlock,
  deleteCacheItem
}
