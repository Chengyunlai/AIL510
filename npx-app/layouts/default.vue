<template>
  <!-- 该内容控制整个布局，所以设置h-screen占满屏 -->
  <div class="h-screen">
    <NavHeader></NavHeader>
    <slot></slot>
    <NavFooter></NavFooter>
  </div>
</template>

<script setup>

</script>
