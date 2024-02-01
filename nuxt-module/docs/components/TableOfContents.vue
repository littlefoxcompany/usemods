<template>
  <nav>
    <p class="font-semibold">On this page</p>
    <NuxtLink v-for="link in links" :key="link" :to="'#' + link" class="py-1 flex font-medium text-gray-500 hover:text-white/75 gap-3" activeClass="active">
      {{ link }}
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
  const route = useRoute()
  const toc = await queryContent(route.fullPath).only('body').find()

  const links = toc[0].body?.children?.map((link: any) => {
    return link.props.name
  })
</script>
