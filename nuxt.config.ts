// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // CSS global files
  css: [
    '~/assets/css/variables.css',
    // Font Awesome CSS
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Build modules
  modules: [],

  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '厦门旅游 - 探索魅力厦门',
      meta: [
        { name: 'description', content: '厦门旅游官方网站，提供厦门景点、美食、交通等全方位旅游信息。' },
        // PWA meta tags
        { name: 'theme-color', content: '#1a73e8' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'apple-mobile-web-app-title', content: '厦门旅游' },
        { name: 'mobile-web-app-capable', content: 'yes' }
      ],
      link: [
        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' },
        // Font Awesome CDN (as a backup to the npm package)
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        // PWA manifest
        { rel: 'manifest', href: '/manifest.json' },
        // PWA icons
        { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/icon-152x152.png' },
        { rel: 'apple-touch-icon', sizes: '192x192', href: '/icons/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icons/icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/icons/icon-512x512.png' }
      ]
    }
  }
})
