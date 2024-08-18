<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <FormNumber
        v-model.number="count"
        label="Count" />
    </ExampleInputs>
    <ExampleCode :code="`pluralize('${value}', ${count})`" />
    <ExampleResult>
      {{ pluralize(value, count) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('knife')
const count = ref(2)
</script>
