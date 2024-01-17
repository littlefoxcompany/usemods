<template>
  <div class="w-full">
    <label v-if="label" class="text-zinc-500 pb-3 leading-none flex">{{ label }}</label>
    <input
      class="border w-full border-white/5 flex px-4 py-3 font-mono text-sm bg-white/[2%] rounded-lg focus:border-indigo-400 focus:ring-white focus:outline-0"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
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
    }
  })
</script>
