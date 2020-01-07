const cacheName= 'snake-login-page-cache';
const urlsToCache = [
  '/',
  '/main.js',
  '/main.css',
  '/assets/Colorful_Animal_Snake.svg',
  '/login',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (e) => {
  event.respondWith(
    caches.match(e.request)
      .then((response) => {
          if (response) {
            console.log('taken form cache');
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});