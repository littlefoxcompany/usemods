<template>
  <section class="pb-12 text-gray-900 dark:text-white" :id="name" ref="section">

    <div 
      class="relative flex w-full cursor-pointer items-end gap-3"
      @click="copyToClipboard(`${detectHost()}#${props.name.toLowerCase()}`), copied()"
      @mouseover="showCopyToClipboard = true"
      @mouseout="showCopyToClipboard = false">

      <h2 class="text-2xl md:text-3xl font-semibold">{{ name }}</h2>

      <div class="flex h-6 w-6 mb-1 items-center justify-center rounded-md border border-white/5 bg-white/[3%] text-zinc-500 transition-all hover:border-white/20 hover:text-white" :class="showCopyToClipboard ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'">
        <Icon name="heroicons:hashtag" class="h-4 w-4" />
      </div>

      <div class="absolute right-0 mt-1 flex h-6 buttom-4 items-center justify-center rounded-md border border-white/5 bg-white/[3%] px-1.5 text-zinc-500 transition-all" :class="showCopied ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'">
        Link Copied!
      </div>
    </div>

    <!-- Description -->
    <p class="mt-2.5 text-pretty md:text-lg">{{ description }}</p>

    <slot />

    <!-- Info -->
    <Callout v-if="info" class="mt-6">
      <Icon name="heroicons:information-circle-solid" class="h-5 w-5 shrink-0 text-indigo-500" />
      {{ info }}
    </Callout>

    <!-- Function -->
    <div class="flex justify-between text-sm dark:border-white/[6%] gap-2 mt-6 rounded-xl border border-black/5 bg-indigo-600/[2%] dark:bg-white/[2%] px-5 py-5">
      <div class=" font-mono text-gray-900 dark:text-gray-400">
        <span class="text-indigo-600 dark:text-gray-200">{{ name }}</span>
        <span class="mr-px text-gray-500">(</span>
        <span class="text-indigo-600 dark:text-gray-200">{{ params }}</span>
        <span class="ml-px text-gray-500">)</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  params: {
    type: String
  },
  code: {
    type: String
  },
  info: {
    type: String
  }
})

const showCopyToClipboard = ref(false)
const showCopied = ref(false)
const section = ref<HTMLElement>()
const activeSections = useState('activeSections', () => [])
const sectionIsVisible = useElementVisibility(section)

function copied() {
  showCopied.value = true
  setTimeout(() => {
    showCopied.value = false
  }, 800)
}

watch(
  sectionIsVisible,
  (isVisible) => {
    if (isVisible) activeSections.value.push(props.name)
    else activeSections.value = activeSections.value.filter((section) => section !== props.name)
  },
  { immediate: true }
)

onUnmounted(() => {
  activeSections.value = activeSections.value.filter((section) => section !== props.name)
})
</script>
