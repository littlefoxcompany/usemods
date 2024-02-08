<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Length" v-model="length" />
    </ExampleInputs>
    <ExampleResult>
      {{ generateHash(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const length = ref(40)
</script>
