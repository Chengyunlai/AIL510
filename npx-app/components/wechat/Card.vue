<template>
  <div>
    <a href="#" class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
      <n-icon size="25">
        <WechatFilled @click="getWechatCode()"></WechatFilled>
      </n-icon>
    </a>
  </div>

  <n-modal v-model:show="showModal">
    <n-card
        style="width: 600px"
        title="微信公众号登录"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
    >
      <template #header-extra>

      </template>
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
const showModal = ref(false)
const wechatCode = ref("加载中")
const config = useRuntimeConfig()

async function getWechatCode(){
  showModal.value = true
  const {data: res, pending, error, refresh} = await useFetch(() => '/user/wechatCode', {
    baseURL: config.public.baseUrl,
    method: 'get',
    server: false
  })

  if (res && res.value.code==200) {
    wechatCode.value = res.value.data
  }
}



</script>
