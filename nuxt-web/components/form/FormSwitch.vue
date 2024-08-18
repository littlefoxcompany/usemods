<template>
  <div class="flex items-center gap-2">
    <div
      class="text-xs font-medium uppercase leading-none tracking-wide"
      :class="modelValue ? 'text-indigo-600 dark:text-white' : 'text-gray-500'">
      {{ modelValue ? 'On' : 'Off' }}
    </div>
    <label class="relative inline-flex cursor-pointer items-center">
      <input
        :disabled="disabled"
        type="checkbox"
        class="peer sr-only"
        :value="modelValue"
        @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).checked)">
      <div
        class="h-4 w-7 rounded-full bg-black/10 after:absolute after:left-0.5 after:top-0.5 after:size-3 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-zinc-700 dark:after:bg-zinc-200 dark:hover:bg-zinc-600"
        :class="disabled ? 'pointer-events-none cursor-not-allowed opacity-30' : ''" />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  info: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])
</script>
