<template>
      <header class="bg-gray-200 dark:bg-neutral-900" style="height: 96px">
        <nav class="px-6 lg:px-20" aria-label="Top">
          <!-- 默认隐藏 -->
          <div class="flex flex-wrap justify-center gap-x-6 py-4 md:hidden">
            <NuxtLink
                v-for="link in navigation"
                :to="link.href"
                class="text-base font-medium text-gray-900 dark:text-white dark:hover:text-blue-500 hover:text-violet-600"
            >{{ link.name }}</NuxtLink>
          </div>

          <div
              class="border-b border-indigo-500 sm:py-6 lg:border-none hidden md:block"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center">

                <a class="" href="#">
                  <img class="h-12 w-auto" src="/logo-img.png" alt="" />
                  <span class="sr-only text-white">AIL510</span>
                </a>
                <div class="ml-10 space-x-8">
                  <NuxtLink
                      v-for="link in navigation"
                      :to="link.href"
                      class="text-base font-medium text-gray-900 dark:text-white dark:hover:text-blue-500 hover:text-violet-600"
                  >{{ link.name }}</NuxtLink>
                </div>
              </div>
              <div class="flex items-center">
                <ModeColor></ModeColor>
                <div class="flex ml-10 space-x-4">
                  <a
                      @click="login()"
                      class="hover:cursor-pointer rounded-md border border-transparent bg-indigo-500  py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                  >登录</a
                  >
                  <NuxtLink
                      to="/contact"
                      class="text-white dark:text-black rounded-md border border-transparent bg-neutral-500 dark:bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-opacity-75 dark:hover:bg-slate-200"
                  >联系</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
</template>

<script setup >
const store = is_Login()
const {token} = storeToRefs(store)
const router = useRouter()
const config = useRuntimeConfig()

async function login(){
  console.log(token.value)
  if (token.value != null){
    // 验证token是否有效
    const {data,error} =await useFetch('/user/verification',{
      baseURL: config.public.baseUrl,
      method: 'get',
      headers:{
        'Authorization':token
      },
      server: false
    })
    // 如果token有效
    if (data.value.code != 200){
      router.push({ path: "/login" });
    }else {
      router.push({ path: "/room" });
    }
  }else{
    router.push({ path: "/login" });
  }
}

const navigation = [
  { name: "首页", href: "/" },
  { name: "实验室介绍", href: "/about" },
];
</script>

<style scoped>

</style>
