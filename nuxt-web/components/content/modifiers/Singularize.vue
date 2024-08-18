<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleCode :code="`singularize('${value}')`" />
    <ExampleResult>
      {{ singularize(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('knives')
</script>
