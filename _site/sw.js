// Service Worker for caching and performance optimization
const CACHE_NAME = 'portfolio-v1.0.0'
const STATIC_CACHE = 'portfolio-static-v1.0.0'
const DYNAMIC_CACHE = 'portfolio-dynamic-v1.0.0'

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/og-image.svg',
  '/favicon.ico',
  // Cache critical fonts
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap',
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS)
    })
  )
  self.skipWaiting()
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
  self.clients.claim()
})

// Fetch event - serve from cache when possible
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Skip cross-origin requests except for fonts and images
  if (url.origin !== location.origin &&
      !url.pathname.includes('.woff') &&
      !url.pathname.includes('.woff2') &&
      !url.pathname.includes('.ttf')) return

  // Handle different resource types
  if (request.destination === 'document') {
    // Network first for HTML documents
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
        .catch(() => {
          // Fallback to cache
          return caches.match(request)
        })
    )
  } else if (request.destination === 'image' ||
             request.destination === 'script' ||
             request.destination === 'style') {
    // Cache first for static assets
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse
        }

        return fetch(request).then((response) => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(STATIC_CACHE).then((cache) => {
              cache.put(request, responseClone)
            })
          }
          return response
        })
      })
    )
  } else {
    // Network first for other resources
    event.respondWith(
      fetch(request).then((response) => {
        // Cache successful responses
        if (response.status === 200) {
          const responseClone = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone)
          })
        }
        return response
      }).catch(() => {
        return caches.match(request)
      })
    )
  }
})

// Background sync for offline form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync-contact') {
    event.waitUntil(syncContactForm())
  }
})

async function syncContactForm() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    const keys = await cache.keys()

    // Find cached contact form submissions
    const contactRequests = keys.filter(request =>
      request.url.includes('/api/contact')
    )

    await Promise.all(
      contactRequests.map(async (request) => {
        try {
          const response = await fetch(request)
          if (response.ok) {
            await cache.delete(request)
          }
        } catch (error) {
          console.error('Failed to sync contact form:', error)
        }
      })
    )
  } catch (error) {
    console.error('Background sync failed:', error)
  }
}
