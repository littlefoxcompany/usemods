<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="min"
        type="number"
        label="Min"
        :min="0" />
      <FormInput
        v-model="max"
        type="number"
        label="Max" />
    </ExampleInputs>
    <ExampleCode :code="`generateNumberBetween(${min}, ${max})`" />
    <ExampleResult>
      {{ generateNumberBetween(min, max) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const min = ref(1)
const max = ref(10)
</script>
