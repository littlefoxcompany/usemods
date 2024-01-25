<template>
  <div class="relative" @click="copyToClipboard">
    <div class="absolute top-0 left-1/2 -translate-y-full -translate-x-1/2" :class="showCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'">Copied!</div>
    <div class="bg-white/5 py-px rounded-md px-1.5 text-white flex gap-1">
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
