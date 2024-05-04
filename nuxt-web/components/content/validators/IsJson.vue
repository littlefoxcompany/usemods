<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ isJson(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('{"name":"John","age":30,"city":"New York"}')
</script>
