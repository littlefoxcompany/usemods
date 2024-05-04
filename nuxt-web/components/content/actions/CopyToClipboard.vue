<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
      <Button color="secondary" class="self-end" @click="action">{{ label }}</Button>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('Hello, World!')
  const label = ref('Copy')

  function action() {
    copyToClipboard(value.value, callback(true))
  }

  async function callback(success: boolean): string {
    if (success) {
      label.value = 'Copied!'
      setTimeout(() => (label.value = randomSaying()), 2000)
    }
  }

  function randomSaying() {
    const randomSayings = ['Try again', 'One more', 'Click me', 'Keep going']
    return randomSayings[Math.floor(Math.random() * randomSayings.length)]
  }
</script>
