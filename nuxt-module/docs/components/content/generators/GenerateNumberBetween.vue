<template>
  <Example>
    <ExampleInputs>
      <FormInput type="number" label="Min" v-model="min" :min="0" />
      <FormInput type="number" label="Max" v-model="max" />
    </ExampleInputs>
    <ExampleResult>
      {{ generateNumberBetween(min, max) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const min = ref(1)
  const max = ref(10)
</script>
