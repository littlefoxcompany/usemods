<template>
  <div>
    <pre class="p-2 bg-gray-100 rounded-md" contenteditable @input="handleEdit">{{ formattedValue }}</pre>
    <div>{{ value }}</div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['result'])
  const value = ref({} || [])

  const formattedValue = computed(() => JSON.stringify(value.value, null, 2))

  function handleEdit(event: Event) {
    const content = (event.target as HTMLElement).innerText
    try {
      const parsedValue = JSON.parse(content)
      value.value = parsedValue
      emit('result', parsedValue)
    } catch (error) {
      console.error('Error parsing content:', error)
    }
  }
</script>
