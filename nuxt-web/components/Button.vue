<template>
  <button :type="type as 'button' | 'reset' | 'submit'"
    class="flex h-11 translate-y-0 touch-manipulation select-none items-center justify-center gap-2.5 whitespace-nowrap rounded-lg border px-5 text-lg font-medium transition-all" :class="[colorClasses, sizeClasses]">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'button' | 'reset' | 'submit'>,
    default: 'button'
  },
  color: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary'
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md'
  }
})

const colorClasses = {
  'bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-white/20': props.color === 'primary',
  'bg-white text-indigo-600 dark:bg-white/[2%] hover:bg-white/[4%] dark:text-white shadow-lg border-black/[2%] dark:border-white/[5%] dark:hover:bg-white/[3%]': props.color === 'secondary',
}

const sizeClasses = {
  'h-9 px-4 text-sm': props.size === 'sm',
  'h-11 px-5 text-lg': props.size === 'md',
  'h-14 px-6 text-xl': props.size === 'lg'
}
</script>
