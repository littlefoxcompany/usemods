<template>
  <div class="relative w-full">
    <FormLabel
      :label="label"
      :for="id"
      :info="info" />
    <div class="group relative cursor-pointer">
      <select
        :id="id"
        :value="modelValue"
        class="input appearance-none"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
        <slot />
      </select>
      <Icon
        name="heroicons:chevron-down"
        class="pointer-events-none absolute right-3 top-3.5 size-4 text-gray-500 transition-all group-hover:rotate-180 peer-open:rotate-180" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Boolean, Number],
  },
  label: {
    type: String,
  },
  info: {
    type: String,
  },
})

const id = useId()
const emit = defineEmits(['update:modelValue'])
</script>
