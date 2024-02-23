<template>
  <div class="w-full">
    <div class="flex items-start justify-between">
      <FormLabel :label="label" :info="info" />
      <slot name="label" />
    </div>
    <div class="input !pr-3" :class="disabled ? 'opacity-30 pointer-events-none cursor-not-allowed' : ''">
      {{ mask }}

      <input
        v-if="!mask"
        :value="modelValue"
        @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        class="w-full bg-transparent outline-none text-left"
        type="number"
        :min="min"
        :max="max"
        :disabled="disabled" />

      <div v-if="!disabled" class="flex items-center gap-1">
        <button
          type="button"
          class="text-zinc-500 hover:text-white flex"
          @click="$emit('update:modelValue', Number(modelValue) - 1)"
          :class="Number(modelValue) <= Number(min) ? 'opacity-30 hover:opacity-30 pointer-events-none cursor-not-allowed' : ''">
          <Icon name="heroicons:minus-circle-20-solid" class="h-5 w-5 text-indigo-600 dark:text-white" />
        </button>
        <button type="button" class="text-zinc-500 hover:text-white flex" @click="$emit('update:modelValue', Number(modelValue) + 1)">
          <Icon name="heroicons:plus-circle-20-solid" class="h-5 w-5 text-indigo-600 dark:text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: { type: [String, Number], default: 0 },
    placeholder: String,
    label: String,
    info: String,
    min: {
      type: Number
    },
    mask: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
</script>

<style scoped>
  .disabled {
    @apply opacity-30 pointer-events-none cursor-not-allowed;
  }
</style>
