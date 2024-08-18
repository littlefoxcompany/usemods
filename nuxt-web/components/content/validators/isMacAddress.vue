<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isMacAddress(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('00:00:00:00:00:00')
</script>
