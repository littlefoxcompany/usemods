<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormInput label="End" type="text" v-model="start" />
    </ExampleInputs>
    <ExampleResult>
      {{ endWith(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('https://usemods')
  const start = ref('.com')
</script>
