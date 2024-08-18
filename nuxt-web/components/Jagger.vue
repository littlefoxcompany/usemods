<template>
  <section
    id="jagger"
    class="relative mt-24 flex h-96 items-center justify-center text-clip rounded-2xl bg-indigo-900">
    <Button
      class="relative z-10 shadow-2xl shadow-black"
      @click="scrollToAnchor('scrollToAnchor')">
      Scroll back
      <Icon
        name="heroicons:arrow-up"
        class="size-4" />
    </Button>
    <iframe
      class="pointer-events-none absolute z-0 size-full scale-[250%] object-cover opacity-75 mix-blend-color-dodge"
      src="https://giphy.com/embed/ijb5ZE9zIQ2Nq"
      frameBorder="0"
      defer />
  </section>
</template>
