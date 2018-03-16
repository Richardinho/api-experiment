var CACHE_NAME = 'my-site-cache-v1';

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function (response) {
      if(event.request.url.indexOf('github') !== -1) {
        if (response.status == 403) {
          return caches.match(event.request);
        } else {
          var responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(function(cache) {
              cache.put(event.request, responseToCache);
            });
        }
      }
      return response;
    }));
});
