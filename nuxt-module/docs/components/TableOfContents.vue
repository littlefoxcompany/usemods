<template>
  <nav>
    <p class="font-semibold">On this page</p>
    <NuxtLink
      v-for="link in links"
      :key="link.id"
      :to="`#${link.id}`"
      class="py-0.5 flex font-medium text-gray-500 hover:text-white/75 gap-3"
      :class="{ active: activeLink === link.id }">
      {{ link.title }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const toc = await queryContent(route.fullPath).only('body').find()
  const links = toc[0].body?.children?.map((link) => ({ id: link.props?.id, title: link.props?.name }))

  const activeLink = ref('')

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) activeLink.value = visibleSection.target.id
      },
      { rootMargin: '0px', threshold: 0.5 }
    )

    if (!links) return

    links.forEach((link: { id: string }) => {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    })
  })
</script>
