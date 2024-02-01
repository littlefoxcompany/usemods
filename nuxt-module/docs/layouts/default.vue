<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Pages -->
    <div class="container relative mx-auto flex min-h-screen py-12 gap-20">
      <nav class="-mt-2 w-2/12 flex flex-col sticky h-fit top-6">
        <div v-for="section in sidebar" class="pb-12 flex flex-col first:text-xl">
          <NuxtLink v-for="link in section.children" :key="link._path" :to="link._path" class="py-2 flex font-medium text-gray-500 hover:text-white/75 gap-3" activeClass="active">
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen w-7/12">
        <ContentDoc class="w-full" />
      </div>

      <!-- Table of Contents -->
      <TableOfContents class="shrink max-lg:hidden w-3/12 max-w-[150px] h-fit top-8 sticky" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const { data: sidebar } = await useAsyncData('sidebarLinks', () => fetchContentNavigation())

  provide('docs', sidebar)
</script>

<style scoped>
  .active {
    @apply text-amber-400;
  }
</style>
