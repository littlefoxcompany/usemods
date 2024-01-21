<template>
  <div class="w-full">
    <FormLabel :label="label" :info="info" />

    <div
      class="border w-full select-none justify-between items-center border-white/5 flex px-4 h-11 font-mono text-sm bg-white/[2%] rounded-lg focus:border-indigo-400 focus:ring-white focus:outline-0"
      :class="disabled ? 'opacity-30 pointer-events-none cursor-not-allowed' : ''">
      {{ mask ? mask : modelValue }}
      {{ modelValue }}

      <div v-if="!disabled" class="flex items-center gap-1">
        <button
          class="text-zinc-500 hover:text-white"
          @click="$emit('update:modelValue', Number(modelValue) - 1)"
          :class="String(modelValue) <= String(min) ? 'opacity-30 hover:opacity-30 pointer-events-none cursor-not-allowed' : ''">
          <Icon name="heroicons:minus-circle-20-solid" class="h-5 w-5" />
        </button>
        <button class="text-zinc-500 hover:text-white" @click="$emit('update:modelValue', Number(modelValue) + 1)">
          <Icon name="heroicons:plus-circle-20-solid" class="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    modelValue: { type: [String, Number], default: 0 },
    placeholder: String,
    label: String,
    info: String,
    min: {
      type: Number,
      default: 0
    },
    mask: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
</script>

<style scoped>
  .disabled {
    @apply opacity-30 pointer-events-none cursor-not-allowed;
  }
</style>
