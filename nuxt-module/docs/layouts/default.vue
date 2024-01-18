<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Body -->
    <div class="container mx-auto flex min-h-screen py-12">
      <nav class="w-full flex flex-col max-w-[200px]">
        <div v-for="section in sidebarLinks" class="pb-12 flex flex-col first:text-xl">
          <NuxtLink v-for="link in section.children" :key="link._path" :to="link._path" class="py-2 flex font-medium gap-3" activeClass="active">
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen">
        <NuxtPage class="w-full" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  const { data: sidebarLinks } = await useAsyncData('sidebarLinks', () => fetchContentNavigation())
</script>

<style scoped>
  .active {
    @apply text-amber-400;
  }
</style>
