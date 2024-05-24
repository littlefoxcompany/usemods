<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" />
    <!-- <MonacoEditor lang="typescript" :options="{ theme: 'vs-dark' }" class="min-h-[100px]" :value="modelValue" @change="emit('update:modelValue', $event)" @input="" /> -->
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: {
      type: [String, Number, Array, Object]
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

  const emit = defineEmits(['update:modelValue'])
</script>
