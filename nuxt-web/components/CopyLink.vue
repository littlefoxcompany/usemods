<template>
  <button
    class="size-5 text-white/25 transition-all hover:text-white"
    @click="copy(copy)">
    <Icon
      v-if="!copied"
      name="carbon:copy"
      class="size-4" />
    <Icon
      v-else
      name="carbon:checkmark"
      class="size-5 animate-bounce text-indigo-300" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  copy: {
    type: [String, Number],
    default: '',
  },
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
