<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        type="text"
        label="Password" />
    </ExampleInputs>
    <ExampleInputs>
      <FormNumber
        v-model="length"
        label="Length"
        :min="1"
        info="Min 8" />
      <FormNumber
        v-model="uppercase"
        label="Uppercase"
        :min="0"
        info="Min 1" />
      <FormNumber
        v-model="number"
        label="Number"
        :min="0"
        info="Min 1" />
      <FormNumber
        v-model="special"
        label="Special"
        :min="0"
        info="Min 1" />
    </ExampleInputs>
    <ExampleCode :code="`checkPasswordStrength('${value}', { length: ${length}, uppercase: ${uppercase}, number: ${number}, special: ${special} })`" />
    <ExampleResult>
      {{ checkPasswordStrength(value, { length, uppercase, number, special }) }}
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
