<template>
  <div class="flex items-center gap-2">
    <div class="leading-none text-xs uppercase tracking-wide font-medium" :class="modelValue ? 'text-indigo-600 dark:text-white' : 'text-gray-500'">
      {{ modelValue ? 'On' : 'Off' }}
    </div>
    <label class="relative inline-flex cursor-pointer items-center">
      <input
        :disabled="disabled"
        type="checkbox"
        class="peer sr-only"
        :value="modelValue"
        @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
      <div
        class="h-4 w-7 rounded-full bg-black/10 dark:bg-zinc-700 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full dark:after:bg-zinc-200 after:bg-white after:shadow after:transition-all after:content-[''] dark:hover:bg-zinc-600 peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white"
        :class="disabled ? 'opacity-30 pointer-events-none cursor-not-allowed' : ''" />
    </label>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: {
      type: Boolean
    },
    label: {
      type: String
    },
    info: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
</script>
