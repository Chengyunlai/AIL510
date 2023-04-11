<template>
  <div>
    <canvas id="canvas3d"></canvas>
  </div>
</template>

<script setup>
import { Application } from '@splinetool/runtime';
  onMounted(()=>{
    getUI()
  })
  function getUI(){
    if (process.client) {
      const canvas = document.getElementById('canvas3d');
      console.log(canvas)
      const spline = new Application(canvas);
      spline.load('https://prod.spline.design/n14-62Rb3oJV7kmA/scene.splinecode');
    }
  }

</script>

<style scoped>

</style>