<template>
  <div class="comments-container">
    <Giscus
        repo="Chengyunlai/AIL510-Message-board"
        repo-id="R_kgDOJNVQxg"
        category-id="DIC_kwDOJNVQxs4CVFX7"
        mapping="pathname"
        input-position="top"
        theme="dark_dimmed"
        lang="zh-CN"
        loading="lazy"
        crossorigin="anonymous"
        async
    ></Giscus>
  </div>
</template>

<script setup>
import Giscus from '@giscus/vue';

</script>

<style>
.comments-container {
  padding: 0 10px;
  /*display: block;*/
  max-height: 550px;
  overflow-y: scroll;
  /*background-color: #34ceaa;*/
  /*background-color: transparent;*/
  opacity: 1;
  min-height: 350px;
  border-radius: 3px;
  /*border-left: 4px solid whitesmoke;*/
  /*border-bottom: 4px solid whitesmoke;*/
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}


</style>