<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLatLng(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('90.0, 180.0')
</script>
