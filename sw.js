const CACHE_NAME = "hubbe-cache-v6";

const urlsToCache = [
  "/Hubbegarden/",
  "/Hubbegarden/index.html",
  "/Hubbegarden/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});