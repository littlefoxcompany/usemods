<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormNumber label="Count" v-model.number="count" />
    </ExampleInputs>
    <ExampleResult>
      {{ pluralize(value, count) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scooter')
  const count = ref(1)
</script>
