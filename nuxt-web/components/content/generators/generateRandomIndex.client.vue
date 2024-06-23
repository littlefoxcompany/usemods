<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Max" v-model="length" :min="1" />
    </ExampleInputs>
    <ExampleCode :code="`generateRandomIndex(${length})`" />
    <ExampleResult>
      {{ generateRandomIndex(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const length = ref(120)
</script>
