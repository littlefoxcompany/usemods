<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isZero(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(0)
</script>
