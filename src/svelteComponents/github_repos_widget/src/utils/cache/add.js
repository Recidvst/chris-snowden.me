import isCacheAvailable from './isCacheAvailable';
import isValidURL from './isValidURL';

// ADD NEW/REPLACE EXISTING CACHE ITEM WITH PUT
function putCacheItemManually(cacheName = window.location.hostname, cacheURL, responseData, cacheExpiry = '30') {
  if (!isCacheAvailable || typeof cacheURL === 'undefined' || !isValidURL(cacheURL) ) return false;

  caches.open(`${cacheName}`).then( cache => {
    const dataJSON = JSON.stringify({
      'timestamp': Date.now(),
      'cacheexpiry': cacheExpiry,
      'data': responseData,
    })
    cache.put(`${cacheURL}`, new Response(dataJSON));
  })
}

// ADD NEW/REPLACE EXISTING CACHE ITEM WITH PUT (FROM FETCH)
function putCacheItemFromFetch(cacheName = window.location.hostname, cacheURL, cacheExpiry = '30') {
  if (!isCacheAvailable || typeof cacheURL === 'undefined' || !isValidURL(cacheURL) ) return false;

  fetch(cacheURL).then(res => {
    return caches.open(`${cacheName}`).then(cache => {
      const dataJSON = JSON.stringify({
        'timestamp': Date.now(),
        'cacheexpiry': cacheExpiry,
        'responseObj': res,
      })
      return cache.put(cacheURL, new Response(dataJSON));
    })
  })
}

export {
  putCacheItemManually,
  putCacheItemFromFetch
}
