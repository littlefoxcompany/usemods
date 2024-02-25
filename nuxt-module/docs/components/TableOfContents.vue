<template>
  <nav class="text-gray-900 dark:text-white">
    <p class="font-semibold pb-4">On this page</p>

    <template v-for="link in links" :key="link.title">
      <NuxtLink
        v-if="link.title"
        class="flex font-medium text-gray-500 text-sm leading-none dark:hover:text-white/75 gap-3 cursor-pointer hover:text-indigo-600"
        @click="scrollToAnchor(link.title)">
        <div
          class="border-l transition-all w-2"
          :class="activeSections.includes(link.title) ? ' border-indigo-600 dark:border-amber-400 ' : 'border-gray-200 dark:border-white/15'"></div>
        <div class="truncate py-1.5" :class="activeSections.includes(link.title) ? 'text-indigo-600 dark:text-amber-400' : 'text-gray-400 dark:text-white/50'">
          {{ link.title }}
        </div>
      </NuxtLink>
      s
    </template>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const links = ref([])

  const activeSections = useState('activeSections', () => [])

  async function fetchLinks() {
    const toc = await queryContent(route.fullPath).only('body').find()
    links.value = toc[0].body?.children?.map((link) => ({ id: link.props?.id, title: link.props?.name })).filter((link) => Object.keys(link).length > 0) || []
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
