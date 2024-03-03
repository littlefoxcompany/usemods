<template>
  <div class="relative" @click="copyToClipboard">
    <div class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full" :class="showCopied ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'">Link Copied!</div>
    <div class="flex gap-1 rounded-md bg-white/5 px-1.5 py-px text-white">
      {{ label }}
    </div>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })

  const showCopied = ref(false)

  function copied() {
    showCopied.value = true
    setTimeout(() => {
      showCopied.value = false
    }, 800)
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(props.label)
    copied()
  }
</script>
