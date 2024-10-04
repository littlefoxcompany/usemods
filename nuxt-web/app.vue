<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  script: [
    { innerHTML: `(${addDeviceClasses.toString()})();` },
  ],
})

const introLinks = await useAsyncData('intro-links', async () => {
  const data = await queryContent('intro').only(['_path', 'title', 'lead']).find()
  return data
})

const docLinks = await useAsyncData('doc-links', async () => {
  const data = await queryContent('docs').only(['_path', 'title', 'lead']).find()
  return data
})

provide('intro-links', introLinks.data)
provide('doc-links', docLinks.data)
</script>
