<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Length" v-model="length" :min="8" />
    </ExampleInputs>
    <ExampleCode :code="`generatePassword(${length})`" />
    <ExampleResult>
      {{ generatePassword(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const length = ref(8)
</script>
