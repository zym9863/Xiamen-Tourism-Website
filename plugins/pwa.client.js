// This plugin registers the service worker for PWA functionality
// Note: This plugin only runs on the client side

export default defineNuxtPlugin(() => {
  // Only register service worker in production and if the browser supports it
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }
});
