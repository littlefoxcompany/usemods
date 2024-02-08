<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isLongitude(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('180.0')
</script>
