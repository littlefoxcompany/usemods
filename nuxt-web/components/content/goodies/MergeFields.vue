<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput label="Value" type="text" v-model="value" />
      </ExampleInputs>
      <ExampleInputs>
        <FormInput label="Name" v-model="name" placeholder="Enter name" info="Example only"/>
        <FormInput label="Vehicle" v-model="vehicle" placeholder="Enter vehicle" info="Example only"/>
        <FormInput label="Part" v-model="part" placeholder="Enter part" info="Example only"/>
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
