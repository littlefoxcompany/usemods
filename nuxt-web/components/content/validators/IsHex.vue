<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isHex(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('ffffff')
</script>
