<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ escapeHtml(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('<p>Hello World</p>')
</script>
