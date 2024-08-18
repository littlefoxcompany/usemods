<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isUrl(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('https://www.usemods.com')
</script>
