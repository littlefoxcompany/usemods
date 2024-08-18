<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="fullName"
        label="Full Name"
        type="text" />
      <FormNumber
        v-model="length"
        label="Length"
        :min="1"
        info="Default: 2" />
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
