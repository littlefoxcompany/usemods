<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ isEmail(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('j.page@ledzeppelin.com')
</script>
