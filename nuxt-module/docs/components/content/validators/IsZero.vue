<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Value" v-model.number="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isZero(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(0)
</script>
