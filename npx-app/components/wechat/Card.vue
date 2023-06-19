<template>
  <div>
    <a href="#" @click.prevent="getWechatCode()" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
      <n-icon  size="25">
        <WechatFilled></WechatFilled>
      </n-icon>
    </a>
  </div>

  <n-modal
      title="微信公众号登录"
      :mask-closable="false"
      preset="dialog"
      negative-text="取消"
      v-model:show="showModal">
    <n-card
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <div class="flex items-center justify-center">
        <img
            src="/wechat.jpg"
            class="w-2/5"
        />
        <div class="flex flex-col ml-5">
          <strong class="text-lg">输入验证码：</strong>
          <span class="text-lg text-emerald-600">{{ wechatCode }}</span>
        </div>
      </div>
    </n-card>
  </n-modal>
</template>

<script lang="ts" setup>
import {WechatFilled,QqOutlined} from '@vicons/antd'
import {useMessage} from "naive-ui";
const showModal = ref(false)
const wechatCode = ref("加载中")
const config = useRuntimeConfig()
const router = useRouter()
const store = is_Login()
const {token} = storeToRefs(store)
const message = useMessage()

// 定时器任务
const timer = ref(null)

async function getWechatCode(){
  showModal.value = true
  const {data: res, pending, error, refresh} = await useFetch(() => '/user/wechatCode', {
    baseURL: config.public.baseUrl,
    method: 'get',
    server: false
  })

  if (res && res.value.code==200) {
    wechatCode.value = res.value.data.code
  }

  // TODO：每两秒去定时访问后端，验证公众号是否验证
  timer.value = setInterval(async function (){
    const {data:wechatRes,pending, error, refresh} = await useFetch(() => '/user/checkWechatCode', {
      baseURL: config.public.baseUrl,
      method: 'get',
      query:{
        code:res.value.data.code,
        ticket:res.value.data.ticket
      },
      server: false
    })
    if (wechatRes && wechatRes.value.code==200) {
      clearInterval(timer.value)
      token.value = wechatRes.value.data.Authorization
      message.success(wechatRes.value.msg,{
        duration:1000
      })
      router.push({ path: "/room" })
    }else if(wechatRes){
      // 请求还在进行中，可以显示加载中的提示
      message.success(wechatRes.value.msg,{
        duration:1000
      })
    }
  },5000)

  // TODO 三分钟后清除定时器，可以写一个5秒的测试
  setTimeout(()=>{
    wechatCode.value = '验证码过期，请重新尝试'
    clearInterval(timer.value)
  },60000)
}



</script>
