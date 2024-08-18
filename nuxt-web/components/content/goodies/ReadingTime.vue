<template>
  <div>
    <Example>
      <ExampleInputs>
        <FormInput
          v-model="value"
          label="Value"
          type="text" />
      </ExampleInputs>
      <ExampleResult>
        {{ readingTime(value) }}
      </ExampleResult>
    </Example>
  </div>
</template>

<script setup lang="ts">
const value = ref(
  'Scooters are the future of urban transportation. With their compact size and eco-friendly nature, scooters offer a convenient and sustainable way to travel short distances. Whether commuting to work or exploring the city, scooters provide a fun and efficient mode of transportation. With advancements in technology, electric scooters have become increasingly popular, offering a quiet and emission-free ride. Embrace the scooter revolution and experience the freedom of zipping through the streets in style',
)
</script>
