<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model.number="value" />
    </ExampleInputs>
    <ExampleCode :code="`skewness(${value})`" />
    <ExampleResult>
      {{ skewness(JSON.parse(value)) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('[1, 4, 30]')
</script>
