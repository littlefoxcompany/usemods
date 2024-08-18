<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Value"
        type="text" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripEmojis(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
const value = ref('🛵S👨‍💻e🔭r📓i🌊o🍦u🚀s💫 B🍦u💫s📓i🔭n🌊e🛵s🚀s')
</script>
