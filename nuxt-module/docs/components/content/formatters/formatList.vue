<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <FormNumber label="limit" v-model="limit" :min="1" />
      <FormInput label="Value" type="text" v-model="conjunction" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatList(value, limit, conjunction) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(['Mick Jagger', 'Keith Richards', 'Ronnie Wood', 'Brian Jones', 'Ian Stewart', 'Bill Wyman', 'Charlie Watts', 'Mick Taylor'])
  const limit = ref(3)
  const conjunction = ref('and')
</script>
