<template>
  <div class="w-full h-full" id="container"></div>
</template>

<script setup lang="ts">
// 地图对象
const map = shallowRef<AMap.Map>()

// 加载地图文件
onMounted(() => {
  map.value = new AMap.Map('container', {
    zoom: 14,
    center: [120.03169, 30.22612]
  });
})
</script>

<style scoped>

</style>
