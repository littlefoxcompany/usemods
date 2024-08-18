<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('<div>Some <strong>HTML</strong> content</div>')
</script>
