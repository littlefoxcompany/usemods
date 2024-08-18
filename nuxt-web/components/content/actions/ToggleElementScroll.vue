<template>
  <Example>
    <div
      ref="element"
      class="h-[400px] overflow-auto px-8 py-4">
      <p>Deep in my heart, there's a fire, a burnin' heart</p>
      <p>Deep in my heart, there's desire for a start</p>
      <p>I'm dying in emotion</p>
      <p>It's my world in fantasy</p>
      <p>I'm livin' in my, livin' in my dreams</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>I keep it shining everywhere I go</p>
      <p>You're my heart, you're my soul</p>
      <p>I'll be holding you forever</p>
      <p>Stay with you together</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>Yeah, a feelin' that our love will grow</p>
      <p>You're my heart, you're my soul</p>
      <p>That is the only thing I really know</p>
      <br>
      <p>Let's close the door and believe my burnin' heart</p>
      <p>Feeling all right come on, open up your heart</p>
      <p>I'll keep the candles burning</p>
      <p>Let your body melt in mine</p>
      <p>I'm livin' in my, livin' in my dreams</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>I keep it shining everywhere I go</p>
      <p>You're my heart, you're my soul</p>
      <p>I'll be holding you forever</p>
      <p>Stay with you together</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>Yeah, a feelin' that our love will grow</p>
      <p>You're my heart, you're my soul</p>
      <p>That is the only thing I really know</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>Yeah, a feelin' that our love will grow</p>
      <p>You're my heart, you're my soul</p>
      <p>That is the only thing I really know</p>
      <br>
      <p>You're my heart, you're my soul</p>
      <p>Yeah, a feelin' that our love will grow</p>
      <br>
      <iframe
        class="aspect-video w-full"
        src="https://www.youtube.com/embed/4kHl4FoK1Ys"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        defer />
    </div>
    <ExampleInputs>
      <Button
        color="secondary"
        class="w-full"
        @click="toggleElementScroll(element)">
        Toggle
      </Button>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
const element = ref<HTMLElement | null>(null)
</script>
