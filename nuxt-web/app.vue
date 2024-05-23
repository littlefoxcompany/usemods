<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { data: introLinks } = await useAsyncData('intro-links', () => queryContent('intro').only(['_path', 'title', 'lead']).find())
const { data: docLinks } = await useAsyncData('doc-links', () => queryContent('docs').only(['_path', 'title', 'lead']).find())

provide('intro-links', introLinks)
provide('doc-links', docLinks)

onMounted(() => {
  addDeviceClasses()
})

</script>
