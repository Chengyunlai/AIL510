<template>
  <a-layout>
    <a-layout-header>
      <NavRoomHeader></NavRoomHeader>
    </a-layout-header>
    <a-layout>
      <a-layout-sider collapsible breakpoint="xl">
        <div class="logo" />
        <a-menu
            :default-open-keys="['1']"
            :default-selected-keys="['0_3']"
            :style="{ width: '100%' }"
        >
          <NuxtLink to="/room">
          <a-menu-item key="0_1">
            <IconHome></IconHome>
            工作台
          </a-menu-item>
          </NuxtLink>
          <a-sub-menu key="1">
            <template #title>
              <IconCalendar></IconCalendar> 工具
            </template>
            <a-menu-item key="1_1">周报</a-menu-item>
            <a-menu-item key="1_2">视频会议</a-menu-item>
            <a-menu-item key="1_3">物资管理</a-menu-item>
            <a-menu-item key="1_4">聊天</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4">
            <template #title>
              <IconCalendar></IconCalendar> 团队
            </template>
            <a-sub-menu key="2" title="历届学生名单">
              <a-menu-item key="2_1">2021级</a-menu-item>
              <a-menu-item key="2_2">2022级</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3" title="我的团队">
              <a-menu-item key="3_1">团队1</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
        </a-menu>
        <!-- trigger -->
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>
        <slot></slot>
    </a-layout>
    <a-layout-footer>
      <NavFooter></NavFooter>
    </a-layout-footer>
  </a-layout>
</template>

<script>

</script>

<style scoped>

</style>
