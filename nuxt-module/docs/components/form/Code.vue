<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" />
    <pre
      id="notes"
      contenteditable="true"
      class="border w-full h-fit border-white/5 flex px-4 bg-white/[3%] rounded-lg focus:border-indigo-400 focus:ring-white focus:outline-0"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$event.target && $emit('update:modelValue', ($event.target as HTMLInputElement).value)">
      {{ modelValue }}
    </pre>
  </div>
</template>

<script setup lang="ts">
  import { codeToHtml } from 'shikiji'

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

  // const code = await codeToHtml(props.modelValue, {
  //   lang: 'javascript',
  //   theme: 'dark-plus'
  // })
</script>
