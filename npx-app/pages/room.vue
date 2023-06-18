<template>
  <a-row justify="space-between" :gutter="10"  class="w-full p-4" style="margin-right: 0">
    <NuxtPage></NuxtPage>
    <!--<a-col :span="18">-->
    <!--  <div class="bg-white dark:bg-neutral-800 p-3 rounded">-->
    <!--    <p class="text-black dark:text-white text-xl">欢迎回来! {{userName}} ； 今日天气：{{weather}} ; 现在时间：        <n-time :time=myTime format="yyyy-MM-dd hh:mm:ss" /></p>-->
    <!--    <ChartsDemo></ChartsDemo>-->
    <!--  </div>-->
    <!--</a-col>-->
    <!--<a-col :span="6">-->
    <!--  <div class="bg-white dark:bg-neutral-800 p-3 rounded">-->
    <!--    <p class="text-black dark:text-white text-base">-->
    <!--      快捷操作-->
    <!--    </p>-->
    <!--  </div>-->
    <!--</a-col>-->
  </a-row>
</template>

<script setup>
  definePageMeta({
    layout: "room",
    middleware: ["auth"]
  });

  let userName = ref(null)
  let weather = ref(null)

  const store = is_Login()
  const {token} = storeToRefs(store)
  const config = useRuntimeConfig()
  const headers = useRequestHeaders([token])

  const router = useRouter()
  let myTime = ref(new Date())
  setInterval(function (){
    myTime.value = new Date()
  })

  // onBeforeMount(()=>{
  //   getInfo()
  // })

  // async function getInfo(){
  //   const {data: res, pending, error, refresh} = await useFetch(() => '/info', {
  //     baseURL: config.public.baseUrl,
  //     method: 'get',
  //     headers:{
  //       'token':token
  //     },
  //     server: false
  //   })
  //   if (res.value.code == 200){
  //     console.log(res.value.data)
  //     userName.value = res.value.data
  //   }else{
  //     router.push('/login')
  //   }
  // }
</script>

<style scoped>

</style>
