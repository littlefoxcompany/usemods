<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isMacAddress(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('00:00:00:00:00:00')
</script>
