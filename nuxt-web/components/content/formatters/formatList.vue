<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Items"
        type="text"
        required />
      <FormNumber
        v-model="limit"
        label="Limit"
        :min="1"
        info="Default: 2" />
      <FormInput
        v-model="conjunction"
        label="Conjunction"
        type="text"
        info="Default: 'and'" />
    </ExampleInputs>
    <ExampleCode :code="`formatList('${value}', { limit: ${limit}, conjunction: '${conjunction}' })`" />
    <ExampleResult>
      {{ formatList(value, { limit, conjunction }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(['Mick Jagger', 'Keith Richards', 'Ronnie Wood', 'Brian Jones', 'Ian Stewart', 'Bill Wyman', 'Charlie Watts', 'Mick Taylor'])
const limit = ref(3)
const conjunction = ref('and')
</script>
