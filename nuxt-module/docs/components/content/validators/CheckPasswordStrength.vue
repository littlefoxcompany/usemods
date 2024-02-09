<template>
  <Example>
    <ExampleInputs>
      <FormInput type="text" label="Password" v-model="value" />
    </ExampleInputs>
    <ExampleInputs>
      <FormNumber label="Length" v-model="length" :min="1" />
      <FormNumber label="Uppercase" v-model="uppercase" :min="0" />
      <FormNumber label="Number" v-model="number" :min="0" />
      <FormNumber label="Special" v-model="special" :min="0" />
    </ExampleInputs>

    <ExampleResult>
      {{ checkPasswordStrength(value, length, uppercase, number, special) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Pa$$-w0rD!')
  const length = ref(8)
  const uppercase = ref(1)
  const number = ref(1)
  const special = ref(1)
</script>
