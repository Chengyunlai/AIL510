// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  build: {
    transpile: [/echarts/],
  },
  routeRules:{
    '/':{ssr:false},
    '/about':{ssr:true},
    '/login':{ssr:false},
    '/contact':{ssr:false},
  },
  modules:[
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // 引入 Pinia
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs"
        ],
      },
    ]
  ],
  css:[
      'assets/global.css'
  ],
  app:{
    head:{
      charset: 'utf-8',
      title: '雷景生教授实验室',
      meta: [
        { name: 'description', content: '雷景生教授实验室' },
        { name: 'description', content: '雷景生' },
        { name: 'description', content: '雷景生实验室介绍' },
        { name: 'description', content: '雷景生实验室' },
        { name: 'description', content: '浙江科技学院雷景生' },
        { name: 'description', content: 'AIL510' },
        { name: 'description', content: 'AIL504' },
        { name: 'description', content: 'Chengyunlai' },
        { name: 'description', content: '程云来' },
      ],
      script:[
        {
          type: 'text/javascript',
          src: 'https://webapi.amap.com/maps?v=2.0&key=7e0efa0e8006443078cd082ce8b8bba2'
        }

      ]
    }
  },
  runtimeConfig:{
    public:{
      baseUrl:'http://localhost:8080/'
    }
  },
});
