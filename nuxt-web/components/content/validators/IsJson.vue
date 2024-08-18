<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isJson(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('{"name":"John","age":30,"city":"New York"}')
</script>
