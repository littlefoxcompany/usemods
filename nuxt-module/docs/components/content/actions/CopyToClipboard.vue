import type LabelVue from '~/components/form/Label.vue'; import type { FormInput } from '#build/components'; import type { Button } from '#build/components';
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
      setTimeout(() => (label.value = 'Copy'), 2000)
    }
  }
</script>
