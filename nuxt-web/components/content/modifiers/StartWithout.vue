<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <FormInput
        v-model="start"
        label="Start"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`startWithout('${value}', '${start}')`" />
    <ExampleResult>
      {{ startWithout(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('https://usemods.com')
const start = ref('https://')
</script>
