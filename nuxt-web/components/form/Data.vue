<template>
  <pre class="w-full rounded-lg border border-white/5 bg-white/[3%] p-4 font-mono text-sm" v-html="styledJson"></pre>
</template>

<script setup lang="ts">
  const props = defineProps({
    data: Object || Array
  })

  const styledJson = computed(() => {
    const jsonString = JSON.stringify(props.data, null, 2)
    const styledString = jsonString.replace(/(["\{\}\[\]\,])/g, (match) => {
      return `<span class="json-special">${match}</span>`
    })
    return styledString
  })
</script>

<style>
  .json-special {
    @apply font-thin text-indigo-500 dark:text-white/60;
  }
</style>
