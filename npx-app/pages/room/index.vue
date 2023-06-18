<template>
  <a-col :span="18">
    <div class="bg-white dark:bg-neutral-800 p-3 rounded">
      <p class="text-black dark:text-white text-xl">欢迎回来! {{userName}} ； 今日天气：{{weather}} ; 现在时间：        <n-time :time=myTime format="yyyy-MM-dd hh:mm:ss" /></p>
      <ChartsDemo></ChartsDemo>
    </div>
  </a-col>
  <a-col :span="6">
    <div class="bg-white dark:bg-neutral-800 p-3 rounded">
      <p class="text-black dark:text-white text-base">
        快捷操作
      </p>
    </div>
  </a-col>
</template>

<script>

</script>

<style scoped>

</style>
