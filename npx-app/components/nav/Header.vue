<template>
      <header class="bg-gray-200 dark:bg-neutral-900" style="height: 96px">
        <nav class="px-6 lg:px-20" aria-label="Top">
          <!-- 默认隐藏 -->
          <div class="flex flex-wrap justify-center gap-x-6 py-4 md:hidden">
            <a
                v-for="link in navigation"
                :key="link.name"
                :href="link.href"
                class="text-base font-medium text-gray-900 dark:text-white hover:text-indigo-50"
            >{{ link.name }}</a
            >
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
                  <a
                      v-for="link in navigation"
                      :key="link.name"
                      :href="link.href"
                      class="text-base font-medium text-gray-900 dark:text-white hover:text-indigo-50"
                  >{{ link.name }}</a
                  >
                </div>
              </div>
              <div class="flex items-center">
                <ModeColor></ModeColor>
                <div class="flex ml-10 space-x-4">
                  <!--<button @click="switchMode">点击我</button>-->
                  <a
                      href="/login"
                      class=" rounded-md border border-transparent bg-indigo-500  py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
                  >登录</a
                  >
                  <a
                      href="#"
                      class="text-white dark:text-black rounded-md border border-transparent bg-neutral-500 dark:bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
                  >注册</a
                  >
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
</template>

<script setup>

const navigation = [
  { name: "首页", href: "/" },
  { name: "实验室介绍", href: "#" },
  { name: "项目", href: "#" },
  { name: "教师详情", href: "#" },
];
</script>

<style scoped>

</style>