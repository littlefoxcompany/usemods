<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormInput label="Min" type="text" v-model="value2" />
      <FormInput label="Max" type="text" v-model="value3" />
    </ExampleInputs>
    <ExampleResult>
      {{ isBetween(value, value2, value3) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(1)
  const value2 = ref(2)
  const value3 = ref(10)
</script>
