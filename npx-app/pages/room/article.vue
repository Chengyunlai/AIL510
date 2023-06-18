<template>
  <div class="w-full">
    <a-tabs>
      <a-tab-pane key="1">
        <template #title>
          <icon-calendar/> 写文章
        </template>
        Content of Tab Panel 1
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title>
          <icon-clock-circle/> 我的文章
        </template>
        Content of Tab Panel 2
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>
          <icon-user/> 文章管理
        </template>
        Content of Tab Panel 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
