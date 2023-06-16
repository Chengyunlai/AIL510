<template>
  <NSwitch id="toggle" v-model:value="appConfig.theme.dark"></NSwitch>
  <!--<n-switch v-model:value="active" @update:value="switchMode"/>-->
</template>

<script setup>
import {ref} from "vue";
// 获取到根目录的app.config.ts配置信息
const appConfig = useAppConfig();

// const active = ref(false)
// const element = ref(null)

// if (process.client) {
//   // 获取HTML元素
//   element.value = document.querySelector('body');
// }

// 初始加载的时候先判断浏览器的localstorage中是否有`theme`，如果有，切换成深色模式
// onMounted(()=>{
//   if (localStorage.getItem('theme') == 'dark'){
//     active.value = true
//     element.value.classList.add('dark')
//   }
//   // console.log(localStorage.getItem('theme'))
// })

// 切换主题颜色
// function switchMode(){
//   // 如果是深色
//   if (active.value){
//     element.value.classList.add('dark')
//     localStorage.setItem('theme','dark')
//   }else{
//     element.value.classList.remove('dark')
//     localStorage.removeItem('theme')
//   }
// }

</script>

<style scoped>

</style>
