<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="text" />
      <FormInput
        v-model.number="value2"
        label="Percent"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`subtractMargin(${value}, ${value2})`" />
    <ExampleResult>
      {{ subtractMargin(value, value2) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(1234)
const value2 = ref(33)
</script>
