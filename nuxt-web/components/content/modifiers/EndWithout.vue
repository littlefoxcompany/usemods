<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <FormInput
        v-model="start"
        label="End"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`endWithout('${value}', '${start}')`" />
    <ExampleResult>
      {{ endWithout(value, start) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('https://usemods.com/rocks')
const start = ref('rocks')
</script>
