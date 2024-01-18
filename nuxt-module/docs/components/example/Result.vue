<template>
  <div class="p-5 flex bg-white/[2%] justify-between items-center gap-6">
    <div class="flex gap-3 items-center">
      <Icon name="ph:equals-bold" class="text-white/20 w-3" />

      <div class="text-lg font-semibold">
        {{ result }}
      </div>
    </div>
    <div class="flex gap-2 items-center">
      <div class="text-white/25 font-mono text-sm/none">Result</div>
      <CopyToClipboard :copy="result" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    result: {
      type: [String, Number],
      default: ''
    }
  })
</script>
