<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model.number="value" />
      <FormInput label="Percent" type="text" v-model.number="value2" />
    </ExampleInputs>
    <ExampleResult>
      {{ addMarkup(value, value2) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1234)
  const value2 = ref(33)
</script>
