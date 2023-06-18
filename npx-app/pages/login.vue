<template>
  <div id="pages" class="flex" style="min-height: 620px">
    <n-grid x-gap="12" cols="2" item-responsive responsive="screen" style="min-height:600px" id="firework">
      <n-gi span="0 m:1 l:0">
        <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;height:100%;">
          <p class="text-black dark:text-white font-serif font-extralight text-xl">Follow your dreams</p>
          <img class="rotate-diagonal-2 w-3/5 xl:w-1/3 mt-10" src="/dall-e-api-now-available-in-public-beta.webp" alt="">
        </div>

      </n-gi>
      <n-gi span="2 m:1 l:2" class="flex justify-center">
        <div class="flex flex-col justify-center py-12 w-4/5 xl:w-1/4">
          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">登录你的实验室账号</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
              或者
              <a href="/contact" class="font-medium text-indigo-600 dark:text-blue-500 hover:text-indigo-500">你想联系我们</a>
            </p>
          </div>

          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 h-full">
              <form class="space-y-6" method="POST">
                <div>
                  <label for="userName" class="block text-sm font-medium text-gray-700">User Name</label>
                  <div class="mt-1">
                    <input v-model="user.username" id="username" name="username" type="username" autocomplete="username" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                  <div class="mt-1">
                    <input v-model="user.password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label for="code" class="block text-sm font-medium text-gray-700">验证码</label>
                  <div class="mt-1">
                    <input v-model="user.code" id="code" name="code" required="" class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                  </div>
                  <img class="mt-2 w-2/5" @click="getCode()" v-bind:src="codeUrl">
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input v-model="user.selected" id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">30天免密登录</label>
                  </div>

                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                  </div>
                </div>

                <div>
                  <button @click.prevent="login()" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">登录</button>
                </div>
              </form>
              <div class="mt-6">
                <div class="relative">
                  <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300" />
                  </div>
                  <div class="relative flex justify-center text-sm">
                    <span class="bg-white px-2 text-gray-500">其他方式</span>
                  </div>
                </div>

                <div class="mt-6 grid grid-cols-3 gap-3">
                  <WechatCard></WechatCard>
                  <!--<div>-->
                  <!--  <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">-->
                  <!--    <n-icon size="25">-->
                  <!--      <WechatFilled @click="getLogin()"></WechatFilled>-->
                  <!--    </n-icon>-->
                  <!--  </a>-->
                  <!--</div>-->

                  <div>
                    <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                      <span class="sr-only">Sign in with Twitter</span>
                      <!--<svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">-->
                      <!--  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />-->
                      <!--</svg>-->
                      <n-icon size="25">
                        <QqOutlined></QqOutlined>
                      </n-icon>
                    </a>
                  </div>

                  <div>
                    <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                      <span class="sr-only">Sign in with GitHub</span>
                      <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>


<script setup>
import {WechatFilled,QqOutlined} from '@vicons/antd'
import confetti from 'canvas-confetti'
import {ref,toRefs} from "vue";
function getLogin(){
  weachtLogin.value = !(weachtLogin.value)
}
const end = Date.now() + (2*1000)

// 喷出五彩纸屑

const timer = setInterval(frame,2000)
const duration = 3 * 1000;
const animationEnd = Date.now() + duration;
const defaults = { startVelocity: 18, spread: 250, ticks: 120, zIndex: 0 };

function frame(){
  confetti({
    particleCount: 200,
    spread: 180,
    origin: {x:0.5,y: 1.1 },
  })
  if(Date.now() > end){
    clearInterval(timer)
  }
}
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}
const spark = setInterval(function (){
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    clearInterval(spark);
  }

  var particleCount = 25 * (timeLeft / duration);
  // since particles fall down, start a bit higher than random
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
},200)

const screenHeight = ref(0)
onMounted(()=>{
  getHeight()
})
function getHeight(){
  if (process.client) {
    screenHeight.value = window.innerHeight - 96; // 96是要减去的像素值
    // 设置nuxtPage的高度为sceenHeight
    const pages = document.getElementById("pages");
    pages.style.height = screenHeight.value + "px";
    // console.log(pages.style.height)
  }
}
if (process.client) {
  window.onresize = function () {
    getHeight()
  }
}

// 登录表单信息
const user = ref({
  username:'',
  password:'',
  code:'',
  selected:false
})

// 获取全局url
const config = useRuntimeConfig()

// 登录方法
import { useMessage } from 'naive-ui'

const message = useMessage()
const store = is_Login()
const {token} = storeToRefs(store)
const router = useRouter()
const codeUrl = ref('http://localhost:8457/ail510/user/getVerificationCode')

async function login() {
  const userJson = JSON.stringify(user.value)

  const {data: res, pending, error, refresh} = await useFetch(() => '/user/login', {
    baseURL: config.public.baseUrl,
    method: 'post',
    body: userJson,
    credentials: 'include'
  })

  if (pending) {
    // 请求还在进行中，可以显示加载中的提示
    message.success('正在验证中',{
      duration:1000
    })
  }
  console.log(res.value)
  if (res && res.value.code==200) {
    message.success(res.value.msg, {
      duration: 5000
    })
    // 从请求头中拿取Authorization
    // console.log(res.value.data.Authorization)
    // 将Token持久化，使用Pinia
    token.value = res.value.data.Authorization
    router.push({ path: "/room" });
  } else if (res) {
    message.error(res.value.msg, {
      duration: 5000
    })
    codeUrl.value = 'http://localhost:8457/ail510/user/getVerificationCode?time='+new Date().getTime();
  }else{
    message.error("网络问题请稍后重试", {
      duration: 5000
    })
    codeUrl.value = 'http://localhost:8457/ail510/user/getVerificationCode?time='+new Date().getTime();
  }
}

async function getCode(){
  codeUrl.value = 'http://localhost:8457/ail510/user/getVerificationCode?time='+new Date().getTime();
}
</script>

<style scoped>
.rotate-diagonal-2{animation:rotate-diagonal-2 3s ease-in-out 2s}
/* ----------------------------------------------
 * Generated by Animista on 2023-3-22 16:7:33
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

@keyframes rotate-diagonal-2{0%{transform:rotate3d(-1,1,0,0deg)}50%{transform:rotate3d(-1,1,0,180deg)}100%{transform:rotate3d(-1,1,0,360deg)}}


</style>
