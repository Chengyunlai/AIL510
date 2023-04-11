<template>
  <n-message-provider>
  <NuxtLayout :name="layout">
    <NuxtPage class="bg-gray-200 dark:bg-neutral-900"></NuxtPage>
  </NuxtLayout>
  </n-message-provider>
</template>

<style>

</style>

<script setup>
import {ref} from "vue"
const layout = ref("default")



</script>
