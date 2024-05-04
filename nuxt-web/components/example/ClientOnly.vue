<template>
  <div class="flex items-center justify-between gap-6 bg-white/[3%] p-5">
    <ClientOnly>
      <div class="flex">
        <Icon name="ph:equals-bold" class="mt-1.5 w-3 shrink-0 text-white/20" />
        <slot />
      </div>
    </ClientOnly>

    <div class="font-mono text-sm/none text-white/25">Result</div>
  </div>
</template>
d
