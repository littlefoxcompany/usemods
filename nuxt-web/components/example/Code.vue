<template>
  <div class="flex items-center justify-between gap-6 overflow-hidden bg-white px-5 py-4 dark:bg-white/[3%] max-md:flex-col">
    <div class="flex items-start gap-3 max-md:text-center">
      <div class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-white/5 max-md:hidden">
        <Icon
          name="ph:code-bold"
          class="w-3 shrink-0 text-indigo-600 dark:text-white/50" />
      </div>
      <div
        class="min-h-7 text-pretty text-lg text-gray-500 dark:text-white/50"
        v-html="formattedCode" />
    </div>
    <Button
      color="secondary"
      size="sm"
      class="max-md:h-12 max-md:w-full md:w-24"
      @click="copyToClipboard(props.code), copied()">
      <Icon
        v-if="showCopied"
        name="🎉"
        class="size-3" />
      <Icon
        v-if="!showCopied"
        name="heroicons:square-2-stack"
        class="size-3" />
      <span class="text-sm/none">
        <span v-if="showCopied">Copied</span>
        <span v-else>Copy</span>
      </span>
    </Button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string
}>()

const formattedCode = computed(() => formatCode(props.code))
const showCopied = ref(false)

function copied() {
  showCopied.value = true
  setTimeout(() => {
    showCopied.value = false
  }, 800)
}

function formatCode(input: string) {
  const regex = /(\b\d+(\.\d+)?\b|(\b\w+\b):\s*'[^']*'|\b\w+\b:\s*\b[\w.-]+\b)/g
  const result = input.replace(regex, match => `<span class="option">${match}</span>`)
  return result
}
</script>

<style scoped>
:deep(.option) {
    @apply text-base underline decoration-indigo-200 dark:decoration-white/10 underline-offset-[6px] decoration-dashed text-indigo-500 dark:text-white inline-flex;
}
</style>
