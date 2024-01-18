<template>
  <button @click="copy(copy)" class="text-white/25 h-5 w-5 hover:text-white transition-all">
    <Icon v-if="!copied" name="carbon:copy" class="w-4 h-4" />
    <Icon v-else name="carbon:checkmark" class="w-5 h-5 text-indigo-300 animate-bounce" />
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
