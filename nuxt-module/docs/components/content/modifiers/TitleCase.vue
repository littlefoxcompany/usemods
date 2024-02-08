<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ titleCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scooters')
</script>
