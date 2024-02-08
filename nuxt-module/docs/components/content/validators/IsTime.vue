<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isTime(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('12:00')
</script>
