<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <div class="container relative mx-auto flex min-h-screen py-12 gap-12">
      <!-- Pages -->
      <nav class="w-full shrink flex flex-col sticky h-fit top-4 max-w-[200px]">
        <div v-for="section in sidebarLinks" class="pb-12 flex flex-col first:text-xl">
          <NuxtLink v-for="link in section.children" :key="link._path" :to="link._path" class="py-2 flex font-medium text-gray-500 hover:text-white/75 gap-3" activeClass="active">
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen grow">
        <NuxtPage class="w-full" />
      </div>

      <!-- Table of Contents -->
      <nav class="w-full shrink max-w-[150px] h-fit top-4 sticky">
        {{ toc }}
      </nav>
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()

  const { data: sidebarLinks } = await useAsyncData('sidebarLinks', () => fetchContentNavigation())
  const { data: toc } = await useAsyncData('toc', () => queryContent().findOne())
</script>

<style scoped>
  .active {
    @apply text-amber-400;
  }
</style>
