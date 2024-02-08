<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Full Name" type="text" v-model="fullName" />
      <FormNumber label="Length" v-model="length" :min="1" />
    </ExampleInputs>
    <ExampleResult>
      {{ formatInitials(fullName, length) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const fullName = ref('Dr John Dorian the Third')
  const length = ref(2)
</script>
