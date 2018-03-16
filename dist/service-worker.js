
self.addEventListener('fetch', function(event) {
  console.log('fetching');
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log('failed, trying cache', event.request.url);
      return caches.match(event.request);
    })
  );
});
