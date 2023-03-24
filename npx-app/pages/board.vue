<template>
  <div class="p-10 bg-white">
    <h1>欢迎</h1>
    <!--留言板-->
    <div class="flex flex-col items-center justify-center">
      <div class="w-3/5">
        <MessageMes></MessageMes>
      </div>
    </div>


  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style scoped>

</style>