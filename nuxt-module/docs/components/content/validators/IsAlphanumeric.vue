<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isAlphanumeric(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('abc123')
</script>
