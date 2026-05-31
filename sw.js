var CACHE_NAME = 'buscacasa-v1';
var urlsToCache = ['/buscacasa/', '/buscacasa/index.html', '/buscacasa/icon.png', '/buscacasa/manifest.json'];
self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(urlsToCache); }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) { return response || fetch(e.request); }));
});
