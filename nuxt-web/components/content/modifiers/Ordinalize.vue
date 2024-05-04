<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ ordinalize(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1)
</script>
