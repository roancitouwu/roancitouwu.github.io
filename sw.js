// Service Worker for Rita Dream - Asset Caching
const CACHE_NAME = 'rita-dream-v1'
const STATIC_CACHE = 'rita-dream-static-v1'
const MODEL_CACHE = 'rita-dream-models-v1'

// Assets to precache
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/favicon.svg',
  '/icons.svg'
]

// Model file extensions to cache
const MODEL_EXTENSIONS = ['.glb', '.gltf', '.bin']

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

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => {
            return name.startsWith('rita-dream-') && 
                   name !== CACHE_NAME && 
                   name !== STATIC_CACHE && 
                   name !== MODEL_CACHE
          })
          .map((name) => caches.delete(name))
      )
    })
  )
  self.clients.claim()
})

// Fetch event - cache strategy
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url)
  
  // Check if it's a model file
  const isModelFile = MODEL_EXTENSIONS.some(ext => url.pathname.endsWith(ext))
  
  if (isModelFile) {
    // Cache-first strategy for 3D models
    event.respondWith(
      caches.open(MODEL_CACHE).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            console.log('[SW] Model from cache:', url.pathname)
            return cachedResponse
          }
          
          return fetch(event.request).then((networkResponse) => {
            if (networkResponse.ok) {
              console.log('[SW] Caching model:', url.pathname)
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
