<template>
  <Example>
    <ExampleInputs>
      <FormData :data="value" />
    </ExampleInputs>
    <ExampleInputs>
      <FormSelect v-model="sortBy">
        <option value="name">Name</option>
        <option value="age">Age</option>
      </FormSelect>
      <FormSelect v-model="sortOrder">
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </FormSelect>
    </ExampleInputs>
    <ExampleResult>
      {{ dataSortBy(value, sortBy, sortOrder) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const sortBy = ref('name')
  const sortOrder = ref('asc')
  const value = [
    {
      name: 'Kieth Richards',
      age: 77
    },
    {
      name: 'Mick Jagger',
      age: 78
    },
    {
      name: 'Charlie Watts',
      age: 80
    }
  ]
</script>
