<template>
  <div class="relative w-full">
    <FormLabel :label="label" :for="id" />
    <div class="group relative cursor-pointer">
      <select :id="id" :value="modelValue" @change="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="input appearance-none">
        <slot />
      </select>
      <Icon name="heroicons:chevron-down" class="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-gray-400 transition-all group-hover:rotate-180 peer-open:rotate-180" />
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

  const id = generateShortId()
</script>
