<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Full Name" type="text" v-model="fullName" />
      <FormNumber label="Length" v-model="length" :min="1" info="Default: 2" />
    </ExampleInputs>
    <ExampleCode :code="`formatInitials('${fullName}', { length: ${length} })`" />
    <ExampleResult>
      {{ formatInitials(fullName, { length }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const fullName = ref('Dr Mick Jagger Snr')
const length = ref(2)
</script>
