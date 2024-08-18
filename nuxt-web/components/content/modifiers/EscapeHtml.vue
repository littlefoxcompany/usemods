<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ escapeHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('<p>Hello World</p>')
</script>
