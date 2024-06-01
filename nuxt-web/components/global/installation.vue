<template><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g :fill="fill">
      <path d="M4,4V1H1C0.448,1,0,1.448,0,2v2H4z" :fill="_secondaryfill"></path>
      <path d="M24,4V2c0-0.552-0.448-1-1-1H6v3H24z" :fill="_secondaryfill"></path>
      <path d="M0,6v16c0,0.552,0.448,1,1,1h22c0.552,0,1-0.448,1-1V6H0z M8.707,14.707L5,18.414L3.586,17l3-3l-3-3L5,9.586 l3.707,3.707C9.098,13.684,9.098,14.316,8.707,14.707z M17,18h-6v-2h6V18z" :fill="fill"></path>
    </g>
  </svg></template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: 'currentColor'
    },
    secondaryfill: {
      type: String
    }
  },
  computed: {
    _secondaryfill: function ()
    {
      return this.secondaryfill || this.fill
    }
  }
}
</script>