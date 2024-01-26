<template>
  <button :type="type" class="px-2.5 gap-2.5 transition-all rounded-md border h-8 font-medium select-none" :class="colorClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'primary'
    }
  })

  const colorClasses = {
    'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white border-white/20': props.color === 'primary',
    'bg-gradient-to-br from-green-500 to-green-700 text-white border-white/20': props.color === 'success',
    'bg-gradient-to-br from-red-500 to-red-700 text-white border-white/20': props.color === 'danger',
    'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white border-white/20': props.color === 'warning',
    'bg-zinc-800 hover:bg-zinc-700 text-white shadow-lg border-white/5': props.color === 'dark'
  }
</script>
