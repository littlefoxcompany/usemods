<template>
  <div class="relative w-full">
    <FormLabel :label="label" />
    <div class="relative group cursor-pointer">
      <select :value="modelValue" @change="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="input appearance-none">
        <slot />
      </select>
      <Icon name="heroicons:chevron-down" class="top-3.5 absolute right-3 pointer-events-none w-4 group-hover:rotate-180 transition-all h-4 peer-open:rotate-180 text-gray-400" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: {
      type: [String, Boolean, Number]
    },
    label: {
      type: String
    }
  })
</script>
