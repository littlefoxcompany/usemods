<template>
  <Example>
    <ExampleInputs>
      <form ref="form" class="flex items-end gap-3 max-md:flex-col">
        <FormInput label="Name" type="text" name="name" value="Jimmy" placeholder="Name" />
        <FormInput label="Email" type="email" name="email" value="jimmy@usemods.com" placeholder="Email" />
        <FormInput label="Password" type="password" name="password" value="secrets" placeholder="Password" />
        <Button @click="resetForm(form)">Reset</Button>
      </form>
    </ExampleInputs>
  </Example>
</template>

<script setup lang="ts">
  const form = ref<HTMLFormElement | null>(null)
</script>
