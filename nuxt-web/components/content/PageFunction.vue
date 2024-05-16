<template>
  <section class="py-12 text-gray-900 dark:text-white" :id="name" ref="section">
    <!-- Title -->
    <div @click="copyToClipboard" class="relative flex w-fit cursor-pointer items-center gap-3" @mouseover="showCopyToClipboard = true" @mouseout="showCopyToClipboard = false">
      <h2 class="text-3xl font-semibold">{{ name }}</h2>

      <div
        class="flex h-6 w-6 items-center justify-center rounded-md border border-white/5 bg-white/[3%] text-zinc-500 transition-all hover:border-white/20 hover:text-white"
        :class="showCopyToClipboard ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'">
        <Icon name="heroicons:hashtag" class="h-4 w-4" />
      </div>

      <div
        class="absolute right-0 -mr-7 mt-1 flex h-6 translate-x-1/2 items-center justify-center rounded-md border border-white/5 bg-white/[3%] px-1.5 text-zinc-500 transition-all"
        :class="showCopied ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'">
        Link Copied!
      </div>
    </div>

    <!-- Description -->
    <p class="mt-2.5 text-pretty md:text-lg">{{ description }}</p>

    <slot />

        <!-- Function -->
    <div
      class="mt-6 flex flex-wrap items-center gap-px rounded-xl border border-black/5 bg-indigo-600/[2%] px-5 py-4 font-mono text-sm text-gray-900 dark:border-white/[8%] dark:bg-white/[3%] dark:text-gray-400">
      {{ name }}
      <span class="mr-px text-gray-500">(</span>

      <div class="flex items-center gap-1 rounded-md bg-indigo-600/[5%] px-1 py-px text-indigo-600 dark:bg-white/[8%] dark:text-indigo-100">
        {{ params }}
      </div>

      <!-- <template v-for="(param, index) in paramsObject" :key="index">
        <div class="flex h-5 items-center gap-1 rounded-md bg-indigo-600/[5%] px-1 py-px text-indigo-600 dark:bg-white/[8%] dark:text-indigo-100">
          <span v-if="param.key">{{ param.key }}</span>
          <span v-if="param.value">{{ param.value }}</span>
          <span v-if="param.defaultValue">={{ param.defaultValue }}</span>
        </div>

        <span v-if="index < paramsObject.length - 1" class="mr-0.5">,</span>
      </template> -->
      <span class="ml-px text-gray-500">)</span>
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

  // const paramPattern = /\s*([^:]+?)\s*:\s*([^=]+?)\s*(?:=\s*([^,]+))?\s*(?=,|$)/g
  // const matches = props.params?.matchAll(paramPattern) || []

  // const paramsObject = computed(() => {
  //   const matchesArray = Array.from(matches)
  //   return matchesArray.map((match) => {
  //     const key = match[1]
  //     const value = match[2]
  //     const defaultValue = match[3]
  //     return {
  //       key,
  //       value,
  //       defaultValue
  //     }
  //   })
  // })

  function copyToClipboard() {
    const url = window.location.href
    const hash = `#${props.name.toLowerCase()}`
    const text = `${url}${hash}`
    navigator.clipboard.writeText(text)
    copied()
    showCopyToClipboard.value = false
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
