self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("payam-news-v1").then(cache =>
      cache.addAll(["/", "/mj.html", "/manifest.webmanifest"])
    )
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
