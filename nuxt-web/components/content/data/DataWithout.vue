<template>
  <Example>
    <ExampleInputs class="flex flex-col">
      <FormData :data="value" />
    </ExampleInputs>
    <ExampleInputs>
      <FormSelect
        v-model="key"
        label="Exclude">
        <option value="name">
          Name
        </option>
        <option value="age">
          Age
        </option>
        <option value="address">
          Address
        </option>
        <option value="country">
          Country
        </option>
      </FormSelect>
    </ExampleInputs>
    <ExampleCode :code="`dataWithout(${JSON.stringify(value)}, '${key}')`" />
    <ExampleResult>
      {{ dataWithout(value, key) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const key = ref('address')
const value = {
  name: 'John',
  age: 25,
  address: {
    street: '123 Main St',
    city: 'Springfield',
    state: 'IL',
  },
  country: 'USA',
}
</script>
