<template>
  <nav class="text-gray-900 dark:text-white">
    <p class="pb-4 font-semibold">On this page</p>

    <template v-for="link in links" :key="link.id">
      <NuxtLink
        v-if="link.id"
        class="flex cursor-pointer gap-3 text-sm font-medium leading-none text-gray-500 hover:text-indigo-600 dark:hover:text-white/75"
        @click="scrollToAnchor(link.id)">
        <div
          class="w-2 border-l transition-all"
          :class="activeSections.includes(link.id) ? ' border-indigo-600 dark:border-amber-400 ' : 'border-gray-200 dark:border-white/15'"></div>
        <div class="truncate py-1.5" :class="activeSections.includes(link.id) ? 'text-indigo-600 dark:text-amber-400' : 'text-gray-400 dark:text-white/50'">
          {{ link.id }}
        </div>
      </NuxtLink>
    </template>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const links = ref([{ id: '' }])

  const activeSections = useState('activeSections', () => [])

  async function fetchLinks() {
    const pathWithoutParamsAndHash = route.fullPath.split('?')[0].split('#')[0]
    const toc = await queryContent(pathWithoutParamsAndHash).only('body').find()
    links.value = toc[0].body?.children?.map((link) => ({ id: link.props?.name ?? link.props?.name ?? link.props?.id })).filter((link) => Object.keys(link).length > 0) || []
  }

  watch(
    () => route.fullPath,
    () => {
      fetchLinks()
    },
    { immediate: true }
  )
</script>
