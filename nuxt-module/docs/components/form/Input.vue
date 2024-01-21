<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" />

    <input
      class="border w-full border-white/5 flex px-4 font-mono text-sm h-11 bg-white/[2%] rounded-lg focus:border-indigo-400 focus:ring-white focus:outline-0"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: {
      type: [String, Number]
    },
    placeholder: {
      type: String
    },
    label: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    info: {
      type: String
    }
  })
</script>
