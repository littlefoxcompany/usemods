<template>
  <Example>
    <ExampleInputs>
      <Button color="secondary" class="w-full" @click="scrollToAnchor('jagger')">Scroll to Jagger</Button>
    </ExampleInputs>
    <ExampleCode :code="`scrollToAnchor('jagger')`" />
  </Example>
</template>
