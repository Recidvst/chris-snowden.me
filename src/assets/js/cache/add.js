import isCacheAvailable from './isCacheAvailable';
import isValidURL from './isValidURL';

// ADD NEW/REPLACE EXISTING CACHE ITEM WITH PUT
function putCacheItemManually(cacheName = window.location.hostname, imageURL, responseData, cacheExpiry = '30') {
  if (!isCacheAvailable || typeof imageURL === 'undefined' || !isValidURL(imageURL) ) return false;

  caches.open(`${cacheName}__imgaide`).then( cache => {
    const dataJSON = JSON.stringify({
      'timestamp': Date.now(),
      'cacheexpiry': cacheExpiry,
      'buffer': responseData,
    })
    cache.put(`${imageURL}`, new Response(dataJSON));
  })
}

// ADD NEW/REPLACE EXISTING CACHE ITEM WITH PUT (FROM FETCH)
function putCacheItemFromFetch(cacheName = window.location.hostname, imageURL, cacheExpiry = '30') {
  if (!isCacheAvailable || typeof imageURL === 'undefined' || !isValidURL(imageURL) ) return false;

  fetch(imageURL).then(res => {
    return caches.open(`${cacheName}__imgaide`).then(cache => {
      const dataJSON = JSON.stringify({
        'timestamp': Date.now(),
        'cacheexpiry': cacheExpiry,
        'responseObj': res,
      })
      return cache.put(imageURL, new Response(dataJSON));
    })
  })
}

export {
  putCacheItemManually,
  putCacheItemFromFetch
}
