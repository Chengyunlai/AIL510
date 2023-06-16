// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
export default defineNuxtPlugin(nuxtApp =>{
    nuxtApp.vueApp.use(ArcoVueIcon)
})