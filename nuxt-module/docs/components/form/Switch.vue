<template>
  <div class="flex items-center gap-3">
    <FormLabel :label="label" :info="info" class="pb-0" />
    <label class="relative inline-flex cursor-pointer items-center">
      <input
        :disabled="disabled"
        type="checkbox"
        class="peer sr-only"
        :value="modelValue"
        @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).checked)" />
      <div
        class="h-4 w-8 rounded-full bg-zinc-700 after:absolute after:top-0.5 after:left-0.5 after:h-3 after:w-3 after:rounded-full after:bg-zinc-200 after:shadow after:transition-all after:content-[''] hover:bg-zinc-600 peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white"
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
