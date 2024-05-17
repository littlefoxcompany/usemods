<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput label="Value" type="text" v-model="value" />
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
