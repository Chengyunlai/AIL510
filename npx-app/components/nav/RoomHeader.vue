<template>
  <a-row :gutter="24" style="height: 58px;margin: 0">
    <!--图标-->
    <a-col flex="250px" class="h-full flex items-center justify-around bg-white dark:bg-neutral-800">
      <div class="hidden">
        <a-dropdown trigger="hover">
          <a-button>菜单</a-button>
          <template #content>
            <a-doption>Option 1</a-doption>
            <a-doption>Option 2</a-doption>
            <a-doption>Option 3</a-doption>
          </template>
        </a-dropdown>
      </div>
      <div class="flex items-center">
        <a class="" href="/">
          <!--<img class="h-10"  src="/svg.svg" alt="" />-->
          <img class="h-12"  src="/logo-room.png" alt="" />
          <span class="sr-only text-white">AIL510</span>
        </a>
        <span class="pl-5 text-base text-neutral-800 dark:text-white">AIL510</span>
      </div>
    </a-col>
    <!--搜索-->
    <a-col flex="auto" style="padding: 0" class="h-full flex items-center justify-start bg-white dark:bg-neutral-800">
      <a-input-search :style="{width:'320px'}" placeholder="搜索" search-button>
        <template #button-icon>
          <icon-search/>
        </template>
        <template #button-default>
          Search
        </template>
      </a-input-search>
    </a-col>
    <!--菜单-->
    <a-col flex="500px" style="padding: 0" class="p-0" >
      <a-menu mode="horizontal" class="bg-white dark:bg-neutral-800">
        <a-sub-menu v-for="link in links" :key="link.id" class="text-base !bg-transparent">
          <template #title>{{link.name}}</template>
          <template #icon>
            <icon-tag size="20" />
          </template>
          <a-menu-item v-for="item in link.items">{{item.name}}</a-menu-item>
        </a-sub-menu>
        <!--<a-menu-item v-for="link in links" :key="link.id" @click="to(link.href)" class="text-base !bg-transparent">-->
        <!--  {{link.name}}-->
        <!--</a-menu-item>-->
      </a-menu>
    </a-col >
    <a-col flex="100px" class="h-full flex items-center justify-start bg-white dark:bg-neutral-800">
      <a-button type="primary">
        <NuxtLink to="/room/article">
          写文章
        </NuxtLink>
      </a-button>
    </a-col>
    <!--头像、主题、通知-->
    <a-col flex="275px" style="padding: 0" class="h-full flex items-center justify-around bg-white dark:bg-neutral-800">
      <a-button class="!bg-transparent" href="https://github.com/Chengyunlai">
        <template #icon>
          <icon-github size="24" />
        </template>
      </a-button>
      <a-button @click="changeTheme" class="!bg-transparent">
        <template #icon>
          <icon-moon-fill v-if="dark" size="24"/>
          <icon-sun-fill v-else size="24" />
        </template>
      </a-button>
      <!--消息提醒-->
      <a-dropdown @select="handleSelect" position="br">
        <a-badge :count="9" dot :dotStyle="{ width: '10px', height: '10px' }">
          <a-avatar class="hover:cursor-pointer" shape="square">
            <icon-notification />
          </a-avatar>
        </a-badge>
        <template #content>
          <a-doption>评论</a-doption>
          <a-doption>赞和收藏</a-doption>
          <a-doption>新增关注</a-doption>
          <a-doption>聊天</a-doption>
          <a-doption>系统通知</a-doption>
        </template>
      </a-dropdown>

      <!--头像-->
      <a-dropdown @select="handleSelect" position="br">
        <a-avatar class="hover:cursor-pointer">H</a-avatar>
        <template #content>
          <a-doption>我的信息</a-doption>
          <a-doption>我的简历</a-doption>
          <a-doption @click="clearToken()">退出登录</a-doption>
        </template>
      </a-dropdown>
    </a-col>
  </a-row>
</template>

<script setup>
  import {ref} from "vue";

  const store = is_Login()
  const {token} = storeToRefs(store)
  const router = useRouter()

  function clearToken(){
    token.value = null
    router.push('/')
  }
  const dark = ref(false)
  const key = ref(1)
  const links = ref([
    {
      id:key.value++,
      name:'开发',
      items:[
        {
          name:'交流广场',
          href:'#'
        },
        {
          name:'求助贴',
          href: '#'
        },
        {
          name:'工作交流',
          href: '#'
        },
        {
          name:'工具分享',
          href: '#'
        }
      ]
    },
    {
      id:key.value++,
      name:'学术',
      href:'/about',
      items:[
        {
          name:'交流广场',
          href:'#'
        },
        {
          name:'求助贴',
          href: '#'
        },
        {
          name:'工作交流',
          href: '#'
        },
        {
          name:'论文分享',
          href: '#'
        }
      ]
    }
  ])

  function to(href){
    navigateTo(href)
  }

  const element = ref(null)
  if (process.client) {
    // 获取HTML元素
    element.value = document.querySelector('body');
  }

  // 初始加载的时候先判断浏览器的localstorage中是否有`theme`，如果有，切换成深色模式
  onMounted(()=>{
    if (localStorage.getItem('theme') == 'dark'){
      // 暗色模式
      dark.value = true
      document.body.setAttribute('arco-theme', 'dark')
      element.value.classList.add('dark')
    }
    // console.log(localStorage.getItem('theme'))
  })

  function changeTheme(){
    if(dark.value){
      // 亮色模式
      dark.value = false
      document.body.removeAttribute('arco-theme');
      element.value.classList.remove('dark')
    }else {
      // 暗色模式
      dark.value = true
      document.body.setAttribute('arco-theme', 'dark')
      element.value.classList.add('dark')
    }
  }
</script>
