<template>
  <nav class="text-gray-900 dark:text-white">
    <p class="font-semibold pb-4">On this page</p>

    <template v-for="link in links" :key="link.id">
      <NuxtLink
        v-if="link.id"
        class="flex font-medium text-gray-500 text-sm leading-none dark:hover:text-white/75 gap-3 cursor-pointer hover:text-indigo-600"
        @click="scrollToAnchor(link.id)">
        <div
          class="border-l transition-all w-2"
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

  onMounted(() => {
    nextTick(() => {
      fetchLinks()
    })
  })

  watch(
    () => route.fullPath,
    () => {
      fetchLinks()
    },
    { immediate: true }
  )
</script>
