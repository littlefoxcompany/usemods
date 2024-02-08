<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLatitude(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('90.0')
</script>
