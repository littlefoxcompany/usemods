<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" />

    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs" />
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    inheritAttrs: true
  })

  const props = defineProps({
    modelValue: {
      type: [String, Number, Object]
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
