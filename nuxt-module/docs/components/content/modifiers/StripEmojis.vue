<template>
  <Example>
    <ExampleInputs>
      <FormInput label="Value" type="text" v-model="value" />
    </ExampleInputs>
    <ExampleResult>
      {{ stripEmojis(value) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
  const value = ref('🛵S👨‍💻e🔭r📓i🌊o🍦u🚀s💫')
</script>
