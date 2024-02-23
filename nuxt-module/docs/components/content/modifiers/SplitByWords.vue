<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput label="Value" type="text" v-model="value" />
      </ExampleInputs>
      <ExampleResult>
        {{ splitByWords(value) }}
      </ExampleResult>
    </Example>

    <Callout class="mt-8">
      <Icon name="heroicons:information-circle-20-solid" class="mr-2" />
      Don't forget to use render your raw HTML with
      <code>v-html</code>
      or whatever the React one is this week.
    </Callout>
  </div>
</template>

<script setup lang="ts">
  const value = ref('Scooters are the future')
</script>
