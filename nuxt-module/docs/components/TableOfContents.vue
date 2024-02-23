<template>
  <nav class="text-gray-900 dark:text-white">
    <p class="font-semibold">On this page</p>

    <NuxtLink
      v-for="link in links"
      :key="link.title"
      @click="scrollToAnchor(link.title)"
      class="py-0.5 flex font-medium text-gray-500 text-sm dark:hover:text-white/75 gap-3 cursor-pointer hover:text-indigo-600"
      :class="{ active: activeLink === link.title }">
      <span class="truncate">
        {{ link.title }}
      </span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const links = ref([])
  const activeLink = ref('')

  async function fetchLinks() {
    const toc = await queryContent(route.fullPath).only('body').find()
    links.value = toc[0].body?.children?.map((link) => ({ id: link.props?.id, title: link.props?.name })) || []
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
    }
  )
</script>
