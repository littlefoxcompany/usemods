<template>
  <nav class="text-gray-900 dark:text-white">
    <p class="pb-4 font-semibold">
      On this page
    </p>

    <ul>
      <li
        v-for="item in data"
        :key="item.id"
        class="mt-0">
        <NuxtLink
          v-if="item.id"
          class="flex cursor-pointer gap-3 text-sm font-medium leading-none text-gray-500 hover:text-indigo-600 dark:hover:text-white/75"
          @click="scrollToAnchor(item.id)">
          <div
            class="w-2 border-l transition-all"
            :class="activeSections.includes(item.id) ? ' border-indigo-600 dark:border-amber-400 ' : 'border-gray-200 dark:border-white/15'" />
          <div
            class="truncate py-1.5"
            :class="activeSections.includes(item.id) ? 'text-indigo-600 dark:text-amber-400' : 'text-gray-500 dark:text-white/50'">
            {{ item.title }}
          </div>
        </NuxtLink>
      </li>
    </ul>

    <NuxtLink
      :to="`https://github.com/LittleFoxCompany/usemods/blob/main/src/${pageId.at(-1)}.ts`"
      target="_blank"
      class="flex items-center gap-1.5 py-8 text-sm font-medium leading-none text-zinc-500">
      <Icon
        name="fa6-brands:github"
        class="-mt-px mr-1.5 size-4" />
      View on GitHub
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute()
const activeSections = useState('activeSections', () => [])
const pageId = useRoute().params.slug

const { data } = useAsyncData('toc' + pageId, () => queryContent(route.path).only('body').findOne().then(
  toc => toc.body?.children
    .map(link => ({ id: link.props?.name ?? link.props?.id, title: link.children?.[0]?.value ?? link.props?.name ?? link.props?.id }))
    .filter(link => link.id && link.title),
))

// Function to scroll to the anchor
function scrollToAnchor(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
