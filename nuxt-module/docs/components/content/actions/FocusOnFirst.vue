<template>
  <Example>
    <ExampleInputs>
      <form ref="form" class="flex gap-3 items-end">
        <FormInput label="Name" type="text" name="name" placeholder="Name" />
        <FormInput label="Email" type="email" name="email" placeholder="Email" />
        <FormInput label="Password" type="password" name="password" placeholder="Password" />
        <Button color="secondary" @click="form && focusOnFirst(form)">Focus</Button>
      </form>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  const form = ref<HTMLFormElement | null>(null)
</script>
