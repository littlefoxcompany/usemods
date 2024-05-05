<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput label="Value" type="text" v-model="value" />
      </ExampleInputs>
      <ExampleInputs>
        <FormInput label="Name" v-model="name" placeholder="Enter name" />
        <FormInput label="Vehicle" v-model="vehicle" placeholder="Enter vehicle" />
        <FormInput label="Part" v-model="part" placeholder="Enter part" />
      </ExampleInputs>
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
