<template>
  <Example>
    <ExampleInputs>
      <FormCode label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ dataShuffle(length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const length = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
</script>
