<template>
  <section class="py-12">
    <!-- Title -->
    <div @click="copyToClipboard" class="flex w-fit relative items-center gap-3 cursor-pointer" @mouseover="showCopyToClipboard = true" @mouseout="showCopyToClipboard = false">
      <h3 class="text-3xl font-semibold">{{ name }}</h3>

      <div
        class="text-zinc-500 hover:border-white/20 hover:text-white bg-white/[3%] transition-all flex h-6 w-6 border border-white/5 items-center justify-center rounded-md"
        :class="showCopyToClipboard ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
        <Icon name="heroicons:hashtag" class="h-4 w-4" />
      </div>

      <div
        class="text-zinc-500 bg-white/[3%] right-0 translate-x-1/2 mt-1 -mr-7 absolute transition-all flex h-6 px-1.5 border border-white/5 items-center justify-center rounded-md"
        :class="showCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">
        Link Copied!
      </div>
    </div>

    <!-- Description -->
    <p class="text-lg mt-2.5">{{ description }}</p>

    <!-- Function -->
    <div class="bg-white/[1%] text-sm flex-wrap gap-px flex items-center mt-6 px-4 py-3 rounded-lg border border-white/5 font-mono">
      {{ name }}
      <span class="text-white/50 mr-0.5">(</span>

      <template v-for="(param, index) in paramsObject" :key="index">
        <div class="bg-white/5 py-px rounded-md px-1.5 text-white flex gap-1">
          <span v-if="param.key">{{ param.key }}:</span>
          <span v-if="param.value">{{ param.value }}</span>
          <span v-if="param.defaultValue">={{ param.defaultValue }}</span>
        </div>

        <span v-if="index < paramsObject.length - 1" class="mr-0.5 text-white">,</span>
      </template>
      <span class="text-white/50 ml-0.5">)</span>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
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
    }
  })

  const showCopyToClipboard = ref(false)
  const showCopied = ref(false)

  function copied() {
    showCopied.value = true
    setTimeout(() => {
      showCopied.value = false
    }, 800)
  }

  const paramPattern = /(\w+):\s*([^=]+)(\s*=\s*([^,]+))?/g
  const matches = props.params?.matchAll(paramPattern) || []

  const paramsObject = computed(() => {
    const matchesArray = Array.from(matches)
    return matchesArray.map((match) => {
      const key = match[1]
      const value = match[2]
      const defaultValue = match[4]
      return {
        key,
        value,
        defaultValue
      }
    })
  })

  function copyToClipboard() {
    const url = window.location.href
    const hash = `#${props.name.toLowerCase()}`
    const text = `${url}${hash}`
    navigator.clipboard.writeText(text)
    copied()
    showCopyToClipboard.value = false
  }
</script>

<style scoped>
  :deep(h3) {
    @apply font-semibold text-3xl;
  }
  :deep(pre) {
    @apply bg-white/[4%] group-hover:shadow-xl rounded-lg p-3 font-mono mt-6 border border-white/5;
  }
  :deep(p) {
    @apply text-lg mt-2.5 first:text-xl text-zinc-400;
  }
</style>
