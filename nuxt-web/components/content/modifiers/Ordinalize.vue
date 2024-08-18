<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model="value"
        label="Value" />
    </ExampleInputs>
    <ExampleCode :code="`ordinalize(${value})`" />
    <ExampleResult>
      {{ ordinalize(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1)
</script>
