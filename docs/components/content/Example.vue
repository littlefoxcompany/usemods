<template>
  <div class="sandbox">
    <div class="border border-white/5 flex px-5 py-4 font-mono text-sm bg-white/[2%] rounded-lg">
      {{ output }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    code: String
  })

  const output = ref('')

  watchEffect(() => {
    try {
      output.value = new Function('return ' + props.code)()
    } catch (error) {
      console.error('Error executing function:', error)
      output.value = 'Error executing function'
    }
  })
</script>
