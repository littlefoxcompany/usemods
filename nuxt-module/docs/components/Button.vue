<template>
  <button
    :type="type as 'button' | 'reset' | 'submit'"
    class="px-6 rounded-full justify-center whitespace-nowrap flex gap-2.5 items-center transition-all text-lg border h-11 font-medium select-none"
    :class="colorClasses">
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
    'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-white/20': props.color === 'primary',
    'bg-white/[2%] hover:bg-white/[4%] text-white shadow-lg border-white/[5%]': props.color === 'secondary',
    'bg-gradient-to-br from-green-500 to-green-700 text-white border-white/20': props.color === 'success',
    'bg-gradient-to-br from-red-500 to-red-700 text-white border-white/20': props.color === 'danger',
    'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white border-white/20': props.color === 'warning'
  }
</script>
