// Mi Dex v1.2: actualizaciones de codigo con prioridad a la red.
const CACHE='mi-dex-shell-v3';
const SHELL=['./','./index.html','./app.js','./manifest.webmanifest','./icon.png','./icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  const request=event.request;
  if(request.method !== 'GET' || new URL(request.url).origin !== location.origin) return;
  event.respondWith((async () => {
    try {
      const response=await fetch(request);
      if(response.ok){const cache=await caches.open(CACHE);cache.put(request,response.clone());}
      return response;
    } catch(error) {
      const cached=await caches.match(request);
      if(cached) return cached;
      throw error;
    }
  })());
});
