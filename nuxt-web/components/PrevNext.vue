<template>
  <div
    v-if="data?.prev || data?.next"
    class="mt-12 flex gap-4 text-balance">
    <NuxtLink
      v-if="data?.prev"
      prefetch
      :to="data?.prev._path"
      class="flex flex-1 flex-col items-start gap-3 rounded-lg border p-5 text-left transition-all dark:border-white/10 dark:hover:bg-white/5">
      <Icon
        name="heroicons:arrow-left-circle"
        class="size-6 opacity-30" />
      <div class="text-lg">
        {{ data?.prev.title }}
      </div>
      <div
        v-if="data?.prev.lead"
        class="text-sm dark:text-white/50">
        {{ data?.prev.lead }}
      </div>
    </NuxtLink>
    <NuxtLink
      v-if="data?.next"
      prefetch
      :to="data?.next._path"
      class="flex flex-1 flex-col items-end gap-3 rounded-lg border p-5 text-right transition-all dark:border-white/10 dark:hover:bg-white/5">
      <Icon
        name="heroicons:arrow-right-circle"
        class="size-6 opacity-30" />
      <div class="text-lg">
        {{ data?.next.title }}
      </div>
      <div
        v-if="data?.next.lead"
        class="text-sm dark:text-white/50">
        {{ data?.next.lead }}
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData('next-prev' + route.fullPath, async () => {
  const [prev, next] = await queryContent().only(['_path', 'title', 'lead']).findSurround(route.fullPath)
  return { prev, next }
})
</script>
