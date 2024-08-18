<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model="length"
        label="Length" />
    </ExampleInputs>
    <ExampleResult>
      {{ generateHash(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const length = ref(40)
</script>
