<template>
  <Example>
    <ExampleInputs>
      <FormInput
        v-model="value"
        label="Text" />
      <FormNumber
        v-model="minCharacterCount"
        label="Min Characters"
        type="number" />
      <FormNumber
        v-model="minSentenceCount"
        label="Min Sentences"
        type="number" />
    </ExampleInputs>
    <ExampleCode :code="`formatParagraphs('all-your-long-text', { ${minCharacterCount ? `minCharacterCount: ${minCharacterCount},` : ''} ${minSentenceCount ? `minSentenceCount: ${minSentenceCount}` : ''} })`" />
    <ExampleResult class="whitespace-pre-wrap">
      {{ formatParagraphs(value, { minSentenceCount: minSentenceCount, minCharacterCount: minCharacterCount }) }}
    </ExampleResult>
  </Example>
</template>

<script setup lang="ts">
import { formatParagraphs } from '@/utils/formatters'

// const value = ref('Hello. This is 1.1 it.')
const value = ref('A scooter (motor scooter) is a motorcycle with an underbone or step-through frame, a seat, a transmission that shifts without the operator having to operate a clutch lever, a platform for their feet, and with a method of operation that emphasizes comfort and fuel economy. Elements of scooter design were present in some of the earliest motorcycles, and motor scooters have been made since at least 1914. More recently, scooters have evolved to include scooters exceeding 250cc classified as Maxi-scooters. The global popularity of motor scooters dates from the post-World War II introductions of the Vespa and Lambretta models in Italy. These scooters were intended to provide economical personal transportation (engines from 50 to 150 cc or 3.1 to 9.2 cu in). The original layout is still widely used in this application. Maxi-scooters, with larger engines from 200 to 850 cc (12 to 52 cu in) have been developed for Western markets. Scooters are popular for personal transportation partly due to being more affordable, easier to operate, and more convenient to park and store than a car. Licensing requirements for scooters are easier and cheaper than for cars in most parts of the world, and insurance is usually cheaper. The term motor scooter is sometimes used to avoid confusion with kick scooter, but can then be confused with motorized scooter or e-scooter, a kick-scooter with an electric motor.')
const minCharacterCount = ref(80)
const minSentenceCount = ref(2)
</script>
