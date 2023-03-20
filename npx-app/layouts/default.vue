<template>
  <!-- 该内容控制整个布局，所以设置h-screen占满屏 -->
  <div class="h-screen">
    <header class="fixed w-screen" style="background-color: #18181c">
      <nav class="px-6 lg:px-20" aria-label="Top">
        <div class="flex flex-wrap justify-center gap-x-6 py-4 sm:hidden">
          <a
            v-for="link in navigation"
            :key="link.name"
            :href="link.href"
            class="text-base font-medium text-white hover:text-indigo-50"
            >{{ link.name }}</a
          >
        </div>
        <div
          class="flex w-full items-center justify-between border-b border-indigo-500 sm:py-6 lg:border-none"
        >
          <div class="flex items-center">
            <a class="sm:block hidden" href="#">
              <span class="sr-only text-white">AIL510</span>
              <img class="h-12 w-auto" src="/logo-img.png" alt="" />
            </a>
            <div class="ml-10 hidden space-x-8 sm:block">
              <a
                v-for="link in navigation"
                :key="link.name"
                :href="link.href"
                class="text-base font-medium text-white hover:text-indigo-50"
                >{{ link.name }}</a
              >
            </div>
          </div>
          <div class="sm:block hidden ml-10 space-x-4">
            <a
              href="#"
              class="inline-block rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75"
              >登录</a
            >
            <a
              href="#"
              class="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >注册</a
            >
          </div>
        </div>
      </nav>
    </header>
    <slot></slot>
    <footer class="bg-white">
      <div class="mt-5 flex justify-center space-x-10">
          <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      <div class="flex justify-center items-center h-10">
        <p class="text-xs text-gray-500">
          &copy; 2023 浙江科技学院510实验室 All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { defineComponent, h } from "vue";
const navigation = [
  { name: "首页", href: "#" },
  { name: "实验室介绍", href: "#" },
  { name: "项目", href: "#" },
  { name: "教师详情", href: "#" },
  { name: "毕业生去向", href: "#" },
];

const footerNavigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/Chengyunlai",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    }
  ],
};
</script>
