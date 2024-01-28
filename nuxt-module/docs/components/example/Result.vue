<template>
  <div class="py-4 px-5 flex bg-white/[3%] justify-between items-center gap-6">
    <div class="flex gap-3 items-start">
      <div class="h-5 w-5 shrink-0 rounded-full mt-1 bg-white/5 items-center justify-center flex">
        <Icon name="ph:equals-bold" class="text-white/50 shrink-0 w-3" />
      </div>
      <div class="text-xl font-semibold">
        <slot />
      </div>
    </div>

    <div class="text-white/25 font-mono text-sm/none">Result</div>
  </div>
</template>
