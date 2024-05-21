<template>
    <div class="flex max-md:flex-col items-center justify-between gap-6 bg-white px-5 py-4 dark:bg-white/[3%]">
        <div class="flex items-start gap-3">
            <div class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 dark:bg-white/5">
                <Icon name="ph:code-bold" class="w-3 shrink-0 text-indigo-600 dark:text-white/50" />
            </div>
            <div class="min-h-7 text-lg text-gray-500 dark:text-white/50 text-pretty" v-html="formattedCode"></div>
        </div>
        <button type="button" @click="copyToClipboard(props.code), copied()" class="flex h-7 items-center gap-2 text-indigo-500 dark:text-white/50 hover:text-indigo-600 dark:hover:text-white/75">
            <Icon v-if="showCopied" name="🎉" class="w-4 h-4" />
            <Icon v-else name="heroicons:clipboard" class="w-3 h-3" />
            <span class="text-sm/none">
                <span v-if="showCopied">Copied</span>
                <span v-else>Copy</span>
            </span>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    code: string;
}>();

const formattedCode = computed(() => formatCode(props.code));
const showCopied = ref(false)

function copied() {
    showCopied.value = true
    setTimeout(() => {
        showCopied.value = false
    }, 800)
}

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

