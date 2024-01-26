<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isAlphabetic(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('abc')
</script>
