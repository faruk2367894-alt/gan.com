importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");

const CACHE_VERSION = 'gyanexam-v2';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // পুরনো সব ক্যাশ মেমোরি স্বয়ংক্রিয়ভাবে মুছে ফেলবে
          return caches.delete(key);
        })
      );
    })
  );
  return self.clients.claim();
});
