<template>
  <Example>
    <ExampleInputs>
      <FormNumber
        v-model="length"
        label="Length"
        :min="1" />
    </ExampleInputs>
    <ExampleCode :code="`generateNumber(${length})`" />
    <ExampleResult>
      {{ generateNumber(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const length = ref(8)
</script>
