
console.log('I am a Service Worker!');
self.addEventListener('install', function () {
    self.skipWaiting();
});

