<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ deslugify(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('scooters-are-the-future')
</script>
