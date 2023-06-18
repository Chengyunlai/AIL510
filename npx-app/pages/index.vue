<template>
  <div id="pages" class="flex flex-col justify-center items-center" style="caret-color: transparent">
      <!--<div class="rainbow-container" style="font-size: 120px;">-->
      <!--  <div class="green"></div>-->
      <!--  <div class="pink"></div>-->
      <!--</div>-->
    <div class="relative" style="height: 150px;width: 150px;">
      <canvas class="absolute" id="canvas3d"></canvas>
    </div>
      <h1 @click="toLogin" class="mt-4 text-gray-900 dark:text-white text-6xl font-bold subpixel-antialiased" style="cursor: pointer">
        AIL510
      </h1>
      <span ref="chat" class="mt-4 text-gray-900 dark:text-white">浙江科技学院-AIL510实验室</span>
  </div>
</template>

<style scoped>
.rainbow-container > div {
  position: absolute;
  top: 0.1em;
  left: 0.1em;
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
}

.rainbow-container {
  z-index: 1;
  transform: rotate(0deg) translateZ(0);
  transform-origin: center center;
  width: 1em;
  height: 1em;
  border: 1px solid rgba(255, 255, 255, 0.4);
  -webkit-animation: rainbow 3s infinite linear;
  border-radius: 0.5em;
  box-shadow: 0 0 0.3em 0.05em #2c116e, inset 0.03em 0 0.1em 0.02em #de66e4;
  transform-style: preserve-3d;
  perspective: 1em;
}

.green {
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 60%,
    rgba(115, 213, 186, 0.8) 100%
  );
  transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 0);
  animation: curve-rotate-green 6s infinite linear;
}

.pink {
  background: -webkit-linear-gradient(
    left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 50%,
    rgba(215, 115, 229, 0.8) 100%
  );
  transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 0);
  animation: curve-rotate-pink 3s infinite linear;
}

@keyframes curve-rotate-pink {
  0% {
    transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 0deg);
  }
  50% {
    transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 180deg);
  }
  100% {
    transform: rotateY(180deg) skew(14deg) rotate3d(1.1, 1, 0.9, 360deg);
  }
}

@keyframes curve-rotate-green {
  0% {
    transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 0deg);
  }

  50% {
    transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 180deg);
  }

  100% {
    transform: rotateY(0) skew(14deg) rotate3d(1.1, 1, 0.9, 360deg);
  }
}

@keyframes rainbow {
  0% {
    transform: rotate(0deg) translateZ(0);
    box-shadow: 0 0 0em 0.05em #2c116e, inset 0.03em 0 0.1em 0.02em #de66e4;
  }

  25% {
    transform: rotate(90deg) translateZ(0);
    box-shadow: 0 0 0em 0.01em #28126a, inset 0.03em 0 0.1em 0.02em #34ceaa;
  }

  50% {
    transform: rotate(180deg) translateZ(0);
    box-shadow: 0 0 0em 0.05em #28126a, inset 0.03em 0 0.1em 0.02em #19b3f5;
  }

  75% {
    transform: rotate(270deg) translateZ(0);
    box-shadow: 0 0 0em 0.05em #28126a, inset 0.03em 0 0.1em 0.02em #3d52ac;
  }

  100% {
    transform: rotate(360deg) translateZ(0);
    box-shadow: 0 0 0em 0.05em #28126a, inset 0.03em 0 0.1em 0.02em #de66e4;
  }
}
</style>

<script setup>
  import {ref} from "vue";
  import { Application } from '@splinetool/runtime';
  import TypeIt from 'typeit'
  const chat = ref(null)
  onMounted(()=>{
    getUI()
    new (TypeIt)(chat.value, {
      strings: ["释放你的创造力", "大道至简，实干为要。 路虽远，行则将至；事虽难，做则必成。","浙江科技学院-AIL510实验室"],
      speed: 150,
      lifeLike: true,// 使打字速度不规则
      cursor: true,//在字符串末尾显示闪烁的光标
      breakLines: false,// 控制是将多个字符串打印在彼此之上，还是删除这些字符串并相互替换
      loop: false,//是否循环
    }).go()
  })
  function getUI(){
    if (process.client) {
      const canvas = document.getElementById('canvas3d');
      // console.log(canvas)
      const spline = new Application(canvas);
      spline.load('https://prod.spline.design/n14-62Rb3oJV7kmA/scene.splinecode');
    }
  }

  const route = useRoute()
  function toLogin(){
    // console.log(1)
    navigateTo('/login')
  }

  const screenHeight = ref(0)
  onMounted(()=>{
    getHeight()
  })
  function getHeight(){
    if (process.client) {
      screenHeight.value = window.innerHeight - 96; // 96是要减去的像素值
      // 设置nuxtPage的高度为sceenHeight
      const pages = document.getElementById("pages");
      pages.style.height = screenHeight.value + "px";
      // console.log(pages.style.height)
    }
  }

  if (process.client) {
    window.onresize = function () {
      getHeight()
    }
  }
</script>
