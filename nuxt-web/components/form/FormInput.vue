<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" :for="id" />

    <input
      class="input"
      :id="id"
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
    type: [String, Number, Object, Boolean]
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

const id = useId()
</script>
