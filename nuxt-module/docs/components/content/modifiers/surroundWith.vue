<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormInput label="Start" type="text" v-model="start" />
      <FormInput label="End" type="text" v-model="end" />
    </ExampleInputs>
    <ExampleResult>
      {{ surroundWith(value, start, end) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('usemods')
  const start = ref('https://')
  const end = ref('.com')
</script>
