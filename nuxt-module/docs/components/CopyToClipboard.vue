<template>
  <button @click="copy(copy)" class="h-5 w-5 text-white/25 transition-all hover:text-white">
    <Icon v-if="!copied" name="carbon:copy" class="h-4 w-4" />
    <Icon v-else name="carbon:checkmark" class="h-5 w-5 animate-bounce text-indigo-300" />
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    copy: {
      type: [String, Number],
      default: ''
    }
  })

  const copied = ref(false)

  function copy(text: string) {
    copyToClipboard(text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 1000)
  }
</script>
