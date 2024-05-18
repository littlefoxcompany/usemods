<template>
    <div class="flex items-center justify-between gap-6 bg-white px-5 py-4 dark:bg-white/[3%]">
        <div class="flex items-start gap-3">
            <div class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-white/5">
                <Icon name="ph:code-bold" class="w-3 shrink-0 text-indigo-600 dark:text-white/50" />
            </div>
            <div class="min-h-7 text-lg font-medium text-gray-500 dark:text-white/50 text-pretty" v-html="formattedCode"></div>
        </div>
        <div class="font-mono text-sm/none text-gray-300 max-md:hidden dark:text-white/25">Example</div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    code: string;
}>();

const formattedCode = computed(() => formatCode(props.code));

function formatCode(input: string) {
  const regex = /(\b\d+(\.\d+)?\b|(\b\w+\b):\s*'[^']*'|\b\w+\b:\s*\b[\w.-]+\b)/g;
  const result = input.replace(regex, (match) => `<span class="option">${match}</span>`);
  return result;
}
</script>

<style scoped>
:deep(.option) {
    @apply px-2 py-0 rounded-lg text-base bg-indigo-600/10 text-indigo-500 dark:text-white dark:bg-white/10 inline-flex;
}
</style>

