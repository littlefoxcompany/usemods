<template>
  <Example>
    <ExampleInputs>
      <FormNumber label="Length" v-model="length" :min="1" info="Min 8" />
      <FormNumber label="Uppercase" v-model="uppercase" :min="0" info="Min 1" />
      <FormNumber label="Number" v-model="number" :min="0" info="Min 1" />
      <FormNumber label="Special" v-model="special" :min="0" info="Min 1" />
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
