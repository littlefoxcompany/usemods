<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isIpAddress(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('127.0.0.1')
</script>
