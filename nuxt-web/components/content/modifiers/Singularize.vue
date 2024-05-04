<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ singularize(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('knives')
</script>
