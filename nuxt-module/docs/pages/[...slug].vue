<template>
  <main>
    <!-- Navigation -->
    <NavMain />

    <!-- Pages -->
    <div class="container relative mx-auto flex min-h-screen gap-8 py-2 max-md:flex-col md:gap-12 md:py-12">
      <nav class="top-6 flex h-fit w-full flex-col max-md:hidden md:sticky md:-mt-2 md:w-2/12">
        <div v-for="section in sidebar" class="flex flex-col pb-12 first:text-xl">
          <NuxtLink
            prefetch
            v-for="link in section?.children"
            :key="link._path"
            :to="link._path"
            class="flex items-center gap-3 py-2 font-medium text-gray-500 dark:text-gray-500 dark:hover:text-white/75"
            active-class="active">
            <Icon :name="link.title" class="h-5 w-5 shrink-0" />
            {{ link.title }}
          </NuxtLink>
        </div>
      </nav>

      <!-- Content -->
      <div class="min-h-screen w-full text-gray-950 lg:w-7/12 dark:text-white" :class="route.params.slug ?? null">
        <ContentDoc class="flex w-full grow flex-col" :class="route.params.slug?.at(0) === 'docs' ? 'divide-y divide-dashed divide-indigo-200 dark:divide-white/10' : ''" />

        <!-- Jagger Swagger -->
        <section v-if="route.fullPath === '/docs/actions'" id="jagger" class="relative mt-24 flex h-96 items-center justify-center overflow-clip rounded-2xl bg-indigo-900">
          <Button class="relative z-10 shadow-2xl shadow-black" @click="scrollToAnchor('scrollToAnchor')">
            Scroll back
            <Icon name="heroicons:arrow-up" class="h-4 w-4" />
          </Button>
          <iframe
            class="pointer-events-none absolute z-0 h-full w-full scale-[250%] object-cover opacity-75 mix-blend-color-dodge"
            src="https://giphy.com/embed/ijb5ZE9zIQ2Nq"
            frameBorder="0"
            defer />
        </section>

        <!-- Trail -->
        <div class="mt-12 flex gap-4 text-balance" v-if="prev || next">
          <NuxtLink
            v-if="prev"
            :to="prev._path"
            class="flex flex-1 flex-col items-start gap-3 rounded-lg border p-5 text-left transition-all dark:border-white/10 dark:hover:bg-white/5">
            <Icon name="heroicons:arrow-left-circle" class="h-6 w-6 opacity-30" />
            <div class="text-lg">{{ prev.title }}</div>
            <div v-if="prev.lead" class="text-sm dark:text-white/50">{{ prev.lead }}</div>
          </NuxtLink>
          <NuxtLink
            v-if="next"
            :to="next._path"
            class="flex flex-1 flex-col items-end gap-3 rounded-lg border p-5 text-right transition-all dark:border-white/10 dark:hover:bg-white/5">
            <Icon name="heroicons:arrow-right-circle" class="h-6 w-6 opacity-30" />
            <div class="text-lg">{{ next.title }}</div>
            <div v-if="next.lead" class="text-sm dark:text-white/50">{{ next.lead }}</div>
          </NuxtLink>
        </div>
      </div>

      <!-- Table of Contents -->
      <LazyTableOfContents class="sticky top-8 h-fit shrink max-lg:hidden max-md:hidden" />
    </div>
  </main>
</template>

<script setup lang="ts">
  const route = useRoute()
  const count = await queryContent('docs').count()

  const [prev, next] = await queryContent().only(['_path', 'title', 'lead']).findSurround(route.fullPath)

  const sidebar = inject('content-links')
</script>

<style scoped>
  .active {
    @apply text-indigo-600 dark:text-amber-400;
  }
</style>
