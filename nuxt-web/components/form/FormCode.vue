<template>
  <div class="w-full">
    <FormLabel
      :label="label"
      :info="info" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number, Array, Object],
  },
  placeholder: {
    type: String,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    default: 'text',
  },
  info: {
    type: String,
  },
})
</script>
