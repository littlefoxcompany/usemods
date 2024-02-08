<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripNumbers(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Scooters123')
</script>
