<template>
  <Example>
    <ExampleInputs>
      <FormCode label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isObject(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref({ a: 1, b: 2 })
</script>
