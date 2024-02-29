<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Pages -->
    <div class="container relative mx-auto flex max-md:flex-col min-h-screen py-6 md:py-12 gap-12">
      <nav class="md:-mt-2 w-full md:w-2/12 flex flex-col md:sticky h-fit top-6 max-md:hidden">
        <div v-for="section in sidebar" class="pb-12 flex flex-col first:text-xl">
          <NuxtLink
            v-for="link in section?.children"
            :key="link._path"
            :to="link._path"
            class="py-2 flex font-medium text-gray-400 dark:text-gray-500 items-center dark:hover:text-white/75 gap-3"
            :prefetch="true"
            active-class="active">
            <Icon :name="link.title" class="w-5 h-5 shrink-0" />
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen w-full md:w-7/12 text-gray-950 dark:text-white" :class="route.params.slug ?? null">
        <div class="w-full" :class="route.params.slug?.at(0) === 'docs' ? 'divide-y divide-dashed dark:divide-white/10' : ''">
          <ContentDoc class="flex flex-col grow" />
        </div>

        <!-- Jagger Swagger -->
        <section v-if="route.fullPath === '/docs/actions'" id="jagger" class="flex bg-indigo-900 h-96 overflow-clip rounded-2xl mt-24 items-center justify-center relative">
          <Button class="z-10 relative shadow-black shadow-2xl" @click="scrollToAnchor('scrollToAnchor')">
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
      <TableOfContents class="max-md:hidden shrink max-lg:hidden w-4/12 max-w-[150px] h-fit top-8 sticky" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()
  const { data: sidebar } = await useAsyncData('content-links', () => fetchContentNavigation())
</script>

<style scoped>
  .active {
    @apply dark:text-amber-400 text-indigo-600;
  }
</style>
