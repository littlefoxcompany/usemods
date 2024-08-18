<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isHex(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('ffffff')
</script>
