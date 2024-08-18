<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
      <Button
        color="secondary"
        class="self-end"
        @click="action">
        {{ label }}
      </Button>
    </ExampleInputs>
    <ExampleCode :code="`copyToClipboard('${value}')`" />
  </Example>
</template>

<script setup lang="ts">
const value = ref('Hello, World!')
const label = ref('Copy')

function action() {
  copyToClipboard(value.value)
  label.value = 'Copied!'
  setTimeout(() => (label.value = randomSaying()), 2000)
}

function randomSaying() {
  const randomSayings = ['Try again', 'One more', 'Click me', 'Keep going']
  return randomSayings[Math.floor(Math.random() * randomSayings.length)]
}
</script>
