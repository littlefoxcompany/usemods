<template>
  <section>
    <ClientOnly>
      <Mod>Nice {{ detectDevice() }} you got there</Mod>
    </ClientOnly>

    <Mod mod="formatCurrency">
      <FormInput label="Dollar Value" type="number" v-model="currency" />
      <FormInput label="Decimal places" type="number" v-model="currencyDecimals" />
      <FormInput label="Currency" type="text" v-model="currencySymbol" />
      <!-- {{ formatCurrency(currency, currencyDecimals, currencySymbol) }} -->
    </Mod>

    <Mod mod="formatValuation">
      <FormInput label="Dollar Value" type="number" v-model="valuation" />
      <FormInput label="Decimal places" type="number" v-model="valutionDecimals" />
      <FormInput label="Currency" type="text" v-model="valuationSymbol" />
      <!-- {{ formatValuation(valuation, valutionDecimals, valuationSymbol) }} -->
    </Mod>

    <Mod mod="formatDuration">
      <FormInput label="Enter seconds" type="number" v-model="duration" />
      <!-- {{ formatDuration(duration) }} -->
    </Mod>
  </section>
</template>

<script setup>
  const currency = ref(9876543)
  const currencyDecimals = ref(2)
  const currencySymbol = ref('USD')

  const valuation = ref(9876543210)
  const valutionDecimals = ref(2)
  const valuationSymbol = ref('USD')

  const duration = ref(1234)
</script>
