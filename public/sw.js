importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  new RegExp('.*\.js'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  // Cache CSS files.
  /\.css$/,
  // Use cache but update in the background.
  new workbox.strategies.StaleWhileRevalidate({
    // Use a custom cache name.
    cacheName: 'css-cache',
  })
);

workbox.routing.registerRoute(
  // Cache image files.
  /\.(?:png|jpg|jpeg|svg|gif)$/,
  // Use the cache if it's available.
  new workbox.strategies.CacheFirst({
    // Use a custom cache name.
    cacheName: 'image-cache',
    plugins: [
        new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ],
  })
);
workbox.routing.registerRoute(
  /.*(?:trello)\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);
workbox.routing.registerRoute(
    /.*amazonaws\.com/,
  new workbox.strategies.StaleWhileRevalidate(),
);
