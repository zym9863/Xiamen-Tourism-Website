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
        { name: 'description', content: '厦门旅游官方网站，提供厦门景点、美食、交通等全方位旅游信息。' }
      ],
      link: [
        // Google Fonts
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap' },
        // Font Awesome CDN (as a backup to the npm package)
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  }
})
