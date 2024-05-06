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
        <div class="truncate py-1.5" :class="activeSections.includes(link.id) ? 'text-indigo-600 dark:text-amber-400' : 'text-gray-500 dark:text-white/50'">
          {{ link.id }}
        </div>
      </NuxtLink>
    </template>

    <NuxtLink
      :to="`https://github.com/LittleFoxCompany/usemods/blob/main/src/${pageId.at(-1)}.ts`"
      class="flex items-center gap-1.5 py-8 text-sm font-medium leading-none text-zinc-500">
      <Icon name="fa6-brands:github" class="-mt-px mr-1.5 h-4 w-4" />
      View on GitHub
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const links = ref([{ id: '' }])

  const pageId = detectUrlPath()
  const activeSections = useState('activeSections', () => [])

  async function fetchLinks() {
    const toc = await queryContent(route.fullPath.split('?')[0].split('#')[0]).only('body').find()
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
