<template>
  <div class="w-full">
    <div class="flex items-start justify-between">
      <FormLabel :label="label" :info="info" :for="id" />
      <slot name="label" />
    </div>
    <div class="input !pr-3" :class="disabled ? 'pointer-events-none cursor-not-allowed opacity-30' : ''">
      {{ mask }}

      <input
        v-if="!mask"
        :id="id"
        :value="modelValue"
        @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        class="w-full bg-transparent text-left outline-none"
        type="number"
        :min="min"
        :max="max"
        :disabled="disabled" />

      <div v-if="!disabled" class="flex items-center gap-1">
        <button
          type="button"
          name="decrement"
          class="transtion-all flex touch-manipulation select-none text-zinc-500 opacity-50 hover:text-white hover:opacity-100"
          @click.stop="$emit('update:modelValue', Number(modelValue) - 1)"
          :class="Number(modelValue) <= Number(min) ? 'pointer-events-none cursor-not-allowed opacity-30 hover:opacity-30' : ''">
          <Icon name="heroicons:minus-circle-20-solid" class="h-5 w-5 text-indigo-600 dark:text-white" />
        </button>
        <button
          type="button"
          name="increment"
          class="transtion-all flex touch-manipulation select-none text-zinc-500 opacity-50 hover:text-white hover:opacity-100"
          @click.stop="$emit('update:modelValue', Number(modelValue) + 1)">
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

  const id = useId()
</script>

<style scoped>
  .disabled {
    @apply pointer-events-none cursor-not-allowed opacity-30;
  }
</style>
