import isCacheAvailable from './isCacheAvailable';
import isValidURL from './isValidURL';

// DELETE CACHE ITEM - WHOLE CACHE BLOCK
// function deleteCacheBlock(cacheName = window.location.hostname) {
//   if (!isCacheAvailable) return false;

//   caches.delete(`${cacheName}__imgaide`);
// }

// DELETE CACHE ITEM - SPECIFIC URL WITHIN CACHE BLOCK
function deleteCacheItem(cacheName = window.location.hostname, imageURL) {
  if (!isCacheAvailable || typeof imageURL === 'undefined' || !isValidURL(imageURL) ) return false;

  caches.open(`${cacheName}__imgaide`).then(cache => {
    cache.delete(imageURL);
  })
}

export {
  // deleteCacheBlock,
  deleteCacheItem
}
