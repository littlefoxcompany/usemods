<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model.number="value"
        label="Value"
        type="number" />
    </ExampleInputs>
    <ExampleResult>
      <div v-show="value <= 9000">
        {{ isOver9000(value) }}
      </div>
      <div
        v-show="value > 9000"
        class="mt-4 animate-pulse">
        <img
          src="https://media1.giphy.com/media/5xjbWDIgEZSgM/giphy.gif"
          alt=""
          class="h-48">
      </div>
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref(0)
</script>
