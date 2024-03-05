<template>
  <div class="mt-12 flex gap-4 text-balance" v-if="prev || next">
    <NuxtLink
      prefetch
      v-if="prev"
      :to="prev._path"
      class="flex flex-1 flex-col items-start gap-3 rounded-lg border p-5 text-left transition-all dark:border-white/10 dark:hover:bg-white/5">
      <Icon name="heroicons:arrow-left-circle" class="h-6 w-6 opacity-30" />
      <div class="text-lg">{{ prev.title }}</div>
      <div v-if="prev.lead" class="text-sm dark:text-white/50">{{ prev.lead }}</div>
    </NuxtLink>
    <NuxtLink
      prefetch
      v-if="next"
      :to="next._path"
      class="flex flex-1 flex-col items-end gap-3 rounded-lg border p-5 text-right transition-all dark:border-white/10 dark:hover:bg-white/5">
      <Icon name="heroicons:arrow-right-circle" class="h-6 w-6 opacity-30" />
      <div class="text-lg">{{ next.title }}</div>
      <div v-if="next.lead" class="text-sm dark:text-white/50">{{ next.lead }}</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  const [prev, next] = await queryContent().only(['_path', 'title', 'lead']).findSurround(route.fullPath)
</script>
