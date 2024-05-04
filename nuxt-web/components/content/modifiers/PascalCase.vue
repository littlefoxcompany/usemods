<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ pascalCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scoots and scooters')
</script>
