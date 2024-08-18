<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput
          v-model="value"
          label="Value"
          type="text" />
      </ExampleInputs>
      <ExampleResult>
        {{ splitByWords(value) }}
      </ExampleResult>
    </Example>
  </div>
</template>

<script setup lang="ts">
const value = ref('Scooters are the future')
</script>
