<template>
  <div class="px-5 py-5 flex bg-white/[2%] justify-between items-center gap-6">
    <div class="flex gap-3 items-center">
      <div class="flex h-6 w-6 justify-center items-center bg-white/5 rounded-full">
        <Icon name="ph:equals-bold" class="text-white w-3" />
      </div>
      <div class="text-lg font-semibold">
        <slot />
      </div>
    </div>
    <div class="text-white/25 font-mono text-sm">Result</div>
  </div>
</template>
