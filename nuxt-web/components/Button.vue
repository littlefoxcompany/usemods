<template>
  <button
    :type="type as 'button' | 'reset' | 'submit'"
    class="flex h-11 translate-y-0 touch-manipulation select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border px-5 text-lg font-medium transition-all"
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
    'bg-white text-indigo-600 dark:bg-white/[2%] hover:bg-white/[4%] dark:text-white shadow-lg border-white/[5%]': props.color === 'secondary',
    'bg-gradient-to-br from-green-500 to-green-700 text-white border-white/20': props.color === 'success',
    'bg-gradient-to-br from-red-500 to-red-700 text-white border-white/20': props.color === 'danger',
    'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white border-white/20': props.color === 'warning'
  }
</script>
