// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr:false,
  routeRules:{
    '/':{ssr:false},
    '/test':{ssr:false},
    '/fire':{ssr:false},
    '/about':{ssr:false},
    '/login':{ssr:false},
  },
  modules:[
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
  ],
  css:[
      'assets/global.css'
  ]
});
