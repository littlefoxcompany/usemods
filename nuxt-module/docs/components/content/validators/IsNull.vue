<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isNull(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(null)
</script>
