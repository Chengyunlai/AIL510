<template>
  <div :class="{dark:appConfig.theme.dark}">
    <n-message-provider>
      <NuxtLayout>
        <NuxtPage class="bg-gray-200 dark:bg-neutral-900"></NuxtPage>
      </NuxtLayout>
    </n-message-provider>
  </div>
</template>

<style>

</style>

<script setup>
  // 获取到根目录的app.config.ts配置信息
  const appConfig = useAppConfig();
</script>
