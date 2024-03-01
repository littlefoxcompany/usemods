<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  const { data: contentLinks } = await useAsyncData('content-links', () => fetchContentNavigation())
  provide('content-links', contentLinks)
</script>
