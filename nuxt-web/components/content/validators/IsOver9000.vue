<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="number" v-model.number="value" />
    </ExampleInputs>
    <ExampleResult>
      <div v-show="value <= 9000">
        {{ isOver9000(value) }}
      </div>
      <div v-show="value > 9000" class="animate-pulse mt-4">
        <img src="https://media1.giphy.com/media/5xjbWDIgEZSgM/giphy.gif" alt="" class="h-48" />
      </div>
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref(0)
</script>
