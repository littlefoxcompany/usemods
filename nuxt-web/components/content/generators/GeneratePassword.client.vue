<template>
  <Example>
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
    <ExampleCode :code="`generatePassword({ length: ${length}, uppercase: ${uppercase}, number: ${number}, special: ${special} })`" />
    <ExampleResult>
      {{ generatePassword({ length, uppercase, number, special }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const length = ref(16)
const uppercase = ref(1)
const number = ref(1)
const special = ref(1)
</script>
