<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g :fill="fill">
      <path
        d="M9,24H8a8.009,8.009,0,0,1-8-8V15H2v1a6.006,6.006,0,0,0,6,6H9Z"
        :fill="_secondaryfill" />
      <path
        d="M9,20H8a4,4,0,0,1-4-4V15H6v1a2,2,0,0,0,2,2H9Z"
        :fill="_secondaryfill" />
      <path
        d="M19,14H16.414l-1-1L19.5,8.914,17.293,6.707l1.414-1.414L20.914,7.5l.171-.172a3.121,3.121,0,0,0-4.414-4.414L11,8.586l-1-1V5L5,0,1,4,6,9H8.586l1,1-3,3L11,17.414l3-3,1,1V18l5,5,4-4Z"
        :fill="fill" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    fill: {
      type: String,
      default: 'currentColor',
    },
    secondaryfill: {
      type: String,
    },
  },
  computed: {
    _secondaryfill: function () {
      return this.secondaryfill || this.fill
    },
  },
}
</script>
