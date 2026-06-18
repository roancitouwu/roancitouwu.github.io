// Service Worker for Rita Dream - Asset Caching
// VERSION is bumped on each deploy — triggers cache cleanup on activation.
// For automatic versioning, replace __BUILD_VERSION__ during build (e.g. vite define).
const CACHE_VERSION = 'v4'
const CACHE_NAME = `rita-dream-${CACHE_VERSION}`
const STATIC_CACHE = `rita-dream-static-${CACHE_VERSION}`
const MODEL_CACHE = `rita-dream-models-${CACHE_VERSION}`

// Assets to precache
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/favicon-32.png',
  '/apple-touch-icon.png',
  '/manifest.webmanifest',
  '/icons.svg'
]

// 3D model + texture + decoder extensions to cache (cache-first strategy)
const ASSET_EXTENSIONS = ['.glb', '.gltf', '.bin', '.jpg', '.jpeg', '.png', '.ktx2', '.basis', '.wasm']

// Install event - precache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Precaching static assets')
      return cache.addAll(PRECACHE_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate event - clean ALL old rita-dream caches that don't match current version
self.addEventListener('activate', (event) => {
  const currentCaches = new Set([CACHE_NAME, STATIC_CACHE, MODEL_CACHE])
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('rita-dream-') && !currentCaches.has(name))
          .map((name) => {
            console.log('[SW] Deleting old cache:', name)
            return caches.delete(name)
          })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - cache strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  
  // Ignore non-HTTP/HTTPS protocols (like blob:, data:, chrome-extension:)
  // This is CRITICAL for DRACO Web Workers to function correctly!
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Ignore external origins (like gstatic for DRACO decoders)
  if (url.origin !== self.location.origin) {
    return;
  }

  // Check if it's a cacheable asset (model or texture)
  const isCacheableAsset = ASSET_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  
  if (isCacheableAsset) {
    // Cache-first strategy for 3D models and textures
    event.respondWith(
      caches.open(MODEL_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse
          }
          
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone())
            }
            return networkResponse
          })
        })
      })
    )
    return
  }
  
  // Network-first for HTML, CSS, JS (allows updates)
  if (url.pathname.endsWith('.html') || 
      url.pathname.endsWith('.css') || 
      url.pathname.endsWith('.js') ||
      url.pathname === '/') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const responseClone = response.clone()
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(event.request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          return caches.match(event.request)
        })
    )
    return
  }
  
  // Stale-while-revalidate for other assets (images, fonts, etc.)
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone())
          }
          return networkResponse
        }).catch(() => cachedResponse)
        
        return cachedResponse || fetchPromise
      })
    })
  )
})

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data.type === 'CLEAR_CACHE') {
    caches.keys().then((names) => {
      Promise.all(names.map(name => caches.delete(name)))
    })
  }
  
  if (event.data.type === 'PRELOAD_MODELS') {
    const models = event.data.models || []
    caches.open(MODEL_CACHE).then((cache) => {
      models.forEach((modelUrl) => {
        fetch(modelUrl).then((response) => {
          if (response.ok) {
            cache.put(modelUrl, response)
            console.log('[SW] Preloaded:', modelUrl)
          }
        })
      })
    })
  }
})
