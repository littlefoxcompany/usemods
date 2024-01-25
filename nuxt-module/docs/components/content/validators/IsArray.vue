<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isArray(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(['a', 'b', 'c'])
</script>
