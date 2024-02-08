<template>
  <Example>
    <ExampleInputs>
      <FormInput type="number" label="Min" v-model="min" :min="1" />
      <FormInput type="number" label="Max" v-model="max" :min="Number(min) + 1" />
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
