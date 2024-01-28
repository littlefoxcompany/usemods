<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isNegative(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(-1)
</script>
