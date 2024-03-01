<template>
  <main class="relative flex min-h-screen flex-col">
    <NavMain class="relative z-20 shrink" />
    <div class="relative z-10 flex grow">
      <section class="flex grow flex-col">
        <header class="flex grow flex-col items-center justify-center px-8 py-8 md:py-12">
          <h1
            v-html="splitByWords('Zippy little utils for your javascript frameworks.')"
            id="title"
            class="max-w-[1200px] text-balance text-center text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl xl:text-8xl dark:text-white"></h1>

          <div class="mt-20 flex items-center gap-3 max-md:flex-col">
            <NuxtLink to="intro/introduction">
              <Button size="lg" class="group">
                Get Started
                <Icon name="heroicons:arrow-right" class="h-5 w-5 text-white/50 transition-all duration-200 group-hover:translate-x-1" />
              </Button>
            </NuxtLink>

            <!-- Packages -->
            <div id="packages" class="relative h-11 overflow-visible">
              <button
                type="button"
                v-for="item in packages"
                @click="copy(item)"
                class="flex h-11 cursor-pointer items-center gap-3 whitespace-nowrap rounded-full border border-white/5 bg-black/[5%] px-6 font-mono text-gray-900 backdrop-blur max-md:w-full dark:bg-white/[3%] dark:text-white/90 dark:shadow">
                <Icon name="lucide:terminal" class="h-5 w-5 dark:text-white/50" />
                {{ item }}
              </button>
            </div>
          </div>
        </header>
        <section class="shrink">
          <NuxtPicture src="/big-scooter.png" width="800" class="mx-auto flex w-fit" />
        </section>
      </section>
    </div>

    <Floaters class="absolute left-1/2 top-20 z-0 -translate-x-1/2" />
    <div class="radial absolute left-1/2 top-0 z-0 aspect-square w-full -translate-x-1/2 -translate-y-1/2"></div>
  </main>
</template>

<script setup lang="ts">
  const packages = ['npm i usemods']

  function copy(text: string) {
    copyToClipboard(text)
  }
</script>

<style scoped>
  .radial {
    background: radial-gradient(50% 50% at 50% 50%, #2a2a2a 0%, rgba(24, 24, 27, 0) 100%);
    background: radial-gradient(50% 50% at 50% 50%, color(display-p3 0.165 0.165 0.165) 0%, color(display-p3 0.094 0.094 0.106 / 0) 100%);
  }

  :deep(#title) {
    .word {
      @apply relative inline-flex overflow-clip;

      span {
        @apply -translate-y-full leading-[1.1em] opacity-0;
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
