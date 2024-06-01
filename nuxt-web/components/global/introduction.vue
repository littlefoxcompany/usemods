<template><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g :fill="fill">
      <path d="M24,11C24,5.486,18.617,1,12,1S0,5.486,0,11,5.383,21,11.979,21a11.811,11.811,0,0,0,3.056-.348l5.588,2.275A1.011,1.011,0,0,0,21,23a1,1,0,0,0,.994-1.114l-.545-4.718A9.3,9.3,0,0,0,24,11Zm-7.93.864-4.032,4.1a.055.055,0,0,1-.077,0l-4.03-4.1A2.925,2.925,0,0,1,7.629,8a2.7,2.7,0,0,1,4.33.18.048.048,0,0,0,.08,0A2.7,2.7,0,0,1,16.369,8,2.923,2.923,0,0,1,16.07,11.864Z" :fill="fill"></path>
    </g>
  </svg></template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: "currentColor"
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