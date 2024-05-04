<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isDate(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(new Date())
</script>
