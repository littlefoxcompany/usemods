<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatSentenceCase(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scooters are safe. i like scooters.')
</script>
