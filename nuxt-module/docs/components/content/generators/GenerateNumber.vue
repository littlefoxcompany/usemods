<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Length" v-model="length" :min="8" />
    </ExampleInputs>
    <ExampleResult>
      {{ generateNumber(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const length = ref(8)
</script>
