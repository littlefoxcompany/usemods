<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput
          v-model="value"
          label="Value"
          type="text" />
      </ExampleInputs>
      <ExampleInputs>
        <FormInput
          v-model="name"
          label="Name"
          placeholder="Enter name"
          info="Example only" />
        <FormInput
          v-model="vehicle"
          label="Vehicle"
          placeholder="Enter vehicle"
          info="Example only" />
        <FormInput
          v-model="part"
          label="Part"
          placeholder="Enter part"
          info="Example only" />
      </ExampleInputs>
      <ExampleCode :code="`mergeFields(${value}, { name: ${name}, vehicle: ${vehicle}, part: ${part} })`" />
      <ExampleResult>
        {{ mergeFields(value, { name, vehicle, part }) }}
      </ExampleResult>
    </Example>
  </div>
</template>

<script setup lang="ts">
const value = ref('Hi {{ name }}, your {{ vehicle }} is ready. Your {{ vehicle }} was missing a {{ part }}.')
const name = ref('John')
const vehicle = ref('scooter')
const part = ref('motor')
</script>
