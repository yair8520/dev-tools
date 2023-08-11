const CACHE_NAME = "cache_sample";
const urlsToCache = ["./index.html", "./offline.html"];
const version = "v0.0.1";

self.addEventListener("install", (event) => {
  console.log("Service Worker install event");
  event.waitUntil(
    caches.open(version + CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activate event");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== version + CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(version + CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return response;
      });
    })
  );
});
