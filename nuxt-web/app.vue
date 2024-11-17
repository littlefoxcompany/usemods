<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const introLinks = await useAsyncData('intro-links', async () => {
  const data = await queryContent('intro').only(['_path', 'title', 'lead']).find()
  return data
})

const docLinks = await useAsyncData('doc-links', async () => {
  const data = await queryContent('docs').only(['_path', 'title', 'lead']).find()
  return data
})

onBeforeMount(() => {
  addDeviceClasses()
})

provide('intro-links', introLinks.data)
provide('doc-links', docLinks.data)
</script>
