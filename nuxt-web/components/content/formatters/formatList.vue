<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Items" type="text" v-model="value" required />
      <FormNumber label="Limit" v-model="limit" :min="1" info="Default: 2" />
      <FormInput label="Conjunction" type="text" v-model="conjunction" info="Default: 'and'" />
    </ExampleInputs>
    <ExampleCode :code="`formatList('${value}', { limit: ${limit}, conjunction: '${conjunction}' })`"/>
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
