<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Pages -->
    <div class="container relative mx-auto flex min-h-screen py-12 gap-20">
      <nav class="-mt-2 w-2/12 flex flex-col sticky h-fit top-6">
        <div v-for="section in sidebar" class="pb-12 flex flex-col first:text-xl">
          <NuxtLink
            v-for="link in section.children"
            :key="link._path"
            :to="link._path"
            class="py-2 flex font-medium text-gray-500 items-center hover:text-white/75 gap-3"
            activeClass="active">
            <Icon :name="link.title" class="w-5 h-5" />
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen w-7/12">
        <NuxtPage class="w-full" />

        <!-- Jagger Swagger -->
        <section v-if="route.fullPath === '/docs/actions'" id="jagger" class="flex bg-blue-900 h-96 overflow-clip rounded-2xl mt-24 items-center justify-center relative">
          <Button @click="scrollToAnchor('scrollToAnchor')" class="z-10 relative shadow-black shadow-2xl">
            Scroll back
            <Icon name="heroicons:arrow-up" class="w-4 h-4" />
          </Button>
          <iframe
            class="z-0 mix-blend-color-dodge scale-[250%] opacity-75 h-full w-full absolute pointer-events-none object-cover"
            src="https://giphy.com/embed/ijb5ZE9zIQ2Nq"
            frameBorder="0"
            defer />
        </section>
      </div>

      <!-- Table of Contents -->
      <TableOfContents class="shrink max-lg:hidden w-3/12 max-w-[150px] h-fit top-8 sticky" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { data: sidebar } = await useAsyncData('sidebarLinks', () => fetchContentNavigation())
</script>

<style scoped>
  .active {
    @apply text-amber-400;
  }
</style>
