// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/ui',
    '@pinia/nuxt'
  ],

  // SPA mode for app pages
  ssr: true, // Enable SSR by default
  
  // Configure route rules for hybrid rendering
  routeRules: {
    // Homepage - pre-rendered at build time
    '/': { prerender: true },
    
    // Marketing/educational pages will be pre-rendered when they exist
    // '/guide': { prerender: true },
    // '/examples': { prerender: true },
    
    // App pages - SPA mode for dynamic functionality
    '/app/**': { ssr: false }
  }
})