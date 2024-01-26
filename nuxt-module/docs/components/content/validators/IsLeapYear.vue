<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLeapYear(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(2020)
</script>
