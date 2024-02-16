<template>
  <pre class="bg-white/[3%] w-full rounded-lg p-4 border border-white/5 font-mono text-sm" v-html="styledJson"></pre>
</template>

<script setup lang="ts">
  const props = defineProps({
    data: Object || Array
  })

  const styledJson = computed(() => {
    const jsonString = JSON.stringify(props.data, null, 2)
    const styledString = jsonString.replace(/(["\{\}\,])/g, (match) => {
      return `<span class="json-special">${match}</span>`
    })
    return styledString
  })
</script>

<style>
  .json-special {
    @apply text-white/60;
  }
</style>
