const CACHE_NAME = 'edumath-v5';
const ASSETS = [
  './', 
  './index.html', 
  './sd.html', 
  './smp.html', 
  './space.html',
  './manifest.json', 
  './icon-192.png', 
  './icon-512.png'
];

// Saat pertama kali dibuka, simpan semua file ke cache HP
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Hapus cache versi lama jika ada update
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Ambil file dari cache dulu (offline), kalau tidak ada baru ke internet
self.addEventListener('fetch', event => {
  // Jangan cache request ke Google Sheets API
  if (event.request.url.includes('script.google.com')) return;
  
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return res;
      });
    }).catch(() => caches.match('./index.html'))
  );
});
