<template>
  <Example>
    <ExampleInputs>
      <FormCode
        v-model="value"
        label="Value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isObject(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref({ a: 1, b: 2 })
</script>
