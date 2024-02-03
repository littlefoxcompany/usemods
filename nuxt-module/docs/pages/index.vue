<template>
  <section class="grow flex flex-col">
    <header class="flex flex-col justify-center items-center py-12 grow">
      <h1 ref="test"></h1>
      <h1
        v-html="splitByWords('Zippy little utils for your javascript frameworks.')"
        id="title"
        class="2xl:text-9xl text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white text-center max-w-[1200px]"></h1>

      <div class="flex gap-3 items-center mt-20">
        <Button href="/intro/introduction" size="lg">
          Get Started
          <Icon name="heroicons:arrow-right" class="w-5 h-5 text-white/50" />
        </Button>
        <div class="items-center gap-3 bg-white/[2%] text-white/90 font-mono border flex h-12 px-6 border-white/5 rounded-full">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_9_49)">
              <path d="M6.375 10.125H11.625" stroke="#6366F1" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M0.375 1.125L4.875 5.625L0.375 10.125" stroke="#6366F1" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          </svg>

          npm i usemods
        </div>
      </div>
    </header>
    <section class="shrink">
      <NuxtPicture src="/scooter.png" width="800" class="mx-auto w-fit flex" />
    </section>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({ layout: 'public' })
</script>

<style scoped>
  :deep(#title) {
    .word {
      @apply overflow-clip inline-flex relative;

      span {
        @apply -translate-y-full opacity-0 leading-[1.1em];
        animation: fadeUp 0.5s ease-in-out forwards;

        &.word-1 {
          animation-delay: 0.1s;
        }

        &.word-2 {
          animation-delay: 0.2s;
        }

        &.word-3 {
          animation-delay: 0.3s;
        }

        &.word-4 {
          animation-delay: 0.4s;
        }

        &.word-5 {
          animation-delay: 0.5s;
        }

        &.word-6 {
          animation-delay: 0.6s;
        }

        &.word-7 {
          animation-delay: 0.7s;
        }
      }
    }
  }

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }
</style>
