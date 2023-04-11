<template>
  <div id="pages" class="p-10 xl:p-10 2xl:p-20 xl:flex xl:justify-center" style="min-height: 620px">
    <div class="xl:w-3/4 xl:flex justify-center items-center">
      <n-grid cols="4" item-responsive responsive="screen">
        <n-grid-item span="0 m:2 l:2">
          <div class="flex flex-col justify-center">
            <h1 class="text-blue-600 dark:text-white text-3xl md:text-4xl xl:text-4xl font-bold font-sans p-1  mt-5">欢迎你，同学 / 朋友</h1>
            <h1 class=" text-blue-500 dark:text-blue-400 text-2xl md:text-3xl xl:text-3xl font-bold font-sans p-1 mb-5">WelCome</h1>
            <p class=" text-current dark:text-white text-2xl md:text-2xl xl:text-2xl font-bold font-sans p-1 mb-5 pr-10">如果你对我们的研究方向、工程实践或者实验室感兴趣的话，欢迎联系我们</p>
            <p class=" text-blue-500 dark:text-blue-300 text-lg md:text-2xl xl:text-2xl font-bold font-sans p-1 mb-1">旁边的信息需要你认真填写</p>
            <p class=" text-current dark:text-white text-2xl md:text-2xl xl:text-2xl font-bold font-sans p-1 mt-5 pr-10">其他方式：yunlai_cheng@163.com</p>
          </div>
        </n-grid-item>
        <n-grid-item span="4 m:0 l:0" class="text-center">
          <h1 class="text-blue-600 dark:text-white text-3xl font-bold font-sans">欢迎你，同学 / 朋友</h1>
          <p class=" text-current dark:text-white text-base font-bold font-sans p-1 mt-5">其他方式：yunlai_cheng@163.com</p>
        </n-grid-item>
        <n-grid-item span="4 m:2 l:2">
          <div class="flex flex-col justify-center">
            <div >
              <form class="flex flex-col relative">
                <n-icon size="33" class="text-blue-400 absolute top-10 left-2">
                  <Person20Filled></Person20Filled>
                </n-icon>
                <input class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none xl:w-3/4 text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-12" type="text" aria-label="name-姓名" placeholder="你的姓名" />
                <n-icon size="33" class="text-blue-400 absolute top-10 left-2">
                  <Mail24Regular></Mail24Regular>
                </n-icon>
                <input class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none xl:w-3/4 text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-12" type="text" aria-label="email-邮箱" placeholder="你的邮箱" />
                <n-icon size="33" class="text-blue-400 absolute top-10 left-2">
                  <PhoneShake24Regular></PhoneShake24Regular>
                </n-icon>
                <input class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none xl:w-3/4 text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-12" type="text" aria-label="phone-电话" placeholder="你的电话" />
                <n-icon size="33" class="text-blue-400 absolute top-10 left-2">
                  <DocumentTextExtract24Regular></DocumentTextExtract24Regular>
                </n-icon>
                <input class="focus:border-light-blue-500 focus:ring-2 focus:ring-light-blue-500 focus:outline-none xl:w-3/4 text-lg text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-12" type="text" aria-label="phone-事项" placeholder="备注" />
                <div class="flex mt-6  items-center">
                  <input checked type="radio" name="status" value="学生" class="align-middle mr-2" aria-label="新学生"/><span class="font-bold text-gray-700 dark:text-white text-lg mr-6">新学生</span>
                  <input type="radio" name="status" value="其他人" class="align-middle mr-2" aria-label="其他人" /><span class="font-bold text-gray-700 dark:text-white text-lg">其他人</span>
                </div>
                <input type="file"
                       class="rounded-md border border-transparent text-black dark:text-white py-2 mt-4 text-base font-medium  focus:ring-2 focus:ring-light-blue-500 focus:outline-none"
                       id="docpicker" name="docpicker"
                       accept=".doc,.docx,.pdf"
                >
              </form>

              <button @click="warningMessage()" class="rounded-md border border-transparent bg-indigo-500 mt-6 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">提交</button>
            </div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineComponent, ref} from 'vue'
import { Person20Filled,PhoneShake24Regular,Mail24Regular,VideoPersonSparkle24Filled,DocumentTextExtract24Regular} from '@vicons/fluent'
import { useMessage } from 'naive-ui'

const screenHeight = ref(0)

const year = ref(new Date().getFullYear())

const message = useMessage()
onMounted(()=>{
  getHeight()
  warningMessage()
})
function getHeight(){
  if (process.client) {
    screenHeight.value = window.innerHeight - 96; // 96是要减去的像素值
    // 设置nuxtPage的高度为sceenHeight
    const pages = document.getElementById("pages");
    pages.style.height = screenHeight.value + "px";
  }
}

function warningMessage(){
  message.warning('该内容还在开发中，提交是无效的',{
    duration:5000
  })
}

if (process.client) {
  window.onresize = function () {
    getHeight()
  }
}





</script>

<style scoped>

</style>