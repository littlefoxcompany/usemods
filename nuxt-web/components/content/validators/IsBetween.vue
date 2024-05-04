<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Value" v-model.number="value" />
      <FormNumber label="Min" v-model.number="value2" />
      <FormNumber label="Max" v-model.number="value3" />
    </ExampleInputs>
    <ExampleResult>
      {{ isBetween(value, value2, value3) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1)
  const value2 = ref(2)
  const value3 = ref(10)
</script>
