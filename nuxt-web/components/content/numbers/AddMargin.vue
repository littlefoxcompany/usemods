<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model.number="value" />
      <FormInput label="Percent" type="text" v-model.number="value2" />
    </ExampleInputs>
    <ExampleCode :code="`addMargin(${value}, ${value2})`" />
    <ExampleResult>
      {{ addMargin(value, value2) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1234)
  const value2 = ref(33)
</script>
