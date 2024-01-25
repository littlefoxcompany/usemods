<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isUrl(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('https://www.usemods.com')
</script>
