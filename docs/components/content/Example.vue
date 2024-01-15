<template>
  <div class="sandbox">
    <div class="border border-white/5 flex px-5 py-4 font-mono text-sm bg-white/[2%] rounded-lg">
      {{ result }}
      {{ args }}
      {{ name }}
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    code: String
  })

  const func = toRefs(props).code

  // Extract Arguments
  const args = func.value
    .match(/\((.*?)\)/)[1]
    .split(',')
    .map((arg) => arg.trim())

  // Extract Function Name
  // const name = func.value.match(/function\s+(.*?)\(/)[1]

  // const result = mods[name](...args) || 'Runtime Error'
</script>
