// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  routeRules:{
    '/':{ssr:false},
    '/about':{ssr:true},
    '/login':{ssr:false},
    '/contact':{ssr:false},
    '/glass':{ssr:false},
  },
  modules:[
    '@nuxtjs/tailwindcss',
    '@huntersofbook/naive-ui-nuxt',
  ],
  css:[
      'assets/global.css'
  ],
  app:{
    head:{
      charset: 'utf-8',
      title: '雷景生教授实验室',
      meta: [
        // <meta name="description" content="My amazing site">
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
    }
  }
});
