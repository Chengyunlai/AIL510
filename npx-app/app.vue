<template>
  <NuxtLayout>
    <NuxtPage id="pages" class="bg-gray-200 dark:bg-neutral-900"></NuxtPage>
  </NuxtLayout>
</template>

<style>

</style>

<script setup>
import {ref} from "vue"
const screenHeight = ref(0)

onMounted(()=>{
  getHeight()
})
function getHeight(){
  if (process.client) {
    screenHeight.value = window.innerHeight - 96; // 96是要减去的像素值
    // 设置nuxtPage的高度为sceenHeight
    var pages = document.getElementById("pages");
    pages.style.height = screenHeight.value + "px";
  }
}

if (process.client) {
  window.onresize = function () {
    getHeight()
  }
}


</script>
