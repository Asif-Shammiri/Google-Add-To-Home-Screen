
// Make sure we are accessing over https, if not redirect
if ((!location.port || location.port === "80") && location.protocol !== "https:" && location.host !== "localhost") {
    location.protocol = "https:";
}

//Make Sure Your Service Worker is working
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
        console.log('ServiceWorker registration successful with scope:', registration.scope);
    }).catch(function (error) {
        console.log('ServiceWorker registration failed:', errror);
    });
}
