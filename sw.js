importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.1/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------


// Set workbox config
workbox.setConfig({
  "debug": false
})





// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()



// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()



workbox.precaching.cleanupOutdatedCaches()



// Enable offline Google Analytics tracking
workbox.googleAnalytics.initialize()




// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets



// -- Start of cachingExtensions --
/* eslint-disable */
workbox.routing.registerRoute(
  /\.(mp4|webm)/,
  workbox.strategies.cacheFirst({
    plugins: [
      new workbox.rangeRequests.Plugin()
    ]
  }),
  'GET'
)
// -- End of cachingExtensions --


// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/.html$/'), new workbox.strategies.NetworkFirst ({"cacheName":"Html","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":86400}}), 'GET')
workbox.routing.registerRoute(new RegExp('^https://fonts.*(?:googleapis|gstatic).com/(.*)'), new workbox.strategies.CacheFirst ({"cacheName":"GoogleFont","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":604800}}), 'GET')
workbox.routing.registerRoute(new RegExp('^https://polyfill.io/(.*)'), new workbox.strategies.CacheFirst ({"cacheName":"Polyfill","cacheExpiration":{"maxEntries":2,"maxAgeSeconds":604800}}), 'GET')
workbox.routing.registerRoute(new RegExp('/_nuxt/'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/'), new workbox.strategies.NetworkFirst ({}), 'GET')





