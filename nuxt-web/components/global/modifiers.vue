<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g :fill="fill">
      <path
        d="M8.5,22h-6A2.5,2.5,0,0,1,0,19.5V4.5A2.5,2.5,0,0,1,2.5,2h6A2.5,2.5,0,0,1,11,4.5v15A2.5,2.5,0,0,1,8.5,22Z"
        :fill="fill" />
      <path
        d="M15,6H13V4.5A2.5,2.5,0,0,1,15.5,2H17V4H15.5a.5.5,0,0,0-.5.5Z"
        :fill="_secondaryfill" />
      <path
        d="M24,6H22V4.5a.5.5,0,0,0-.5-.5H20V2h1.5A2.5,2.5,0,0,1,24,4.5Z"
        :fill="_secondaryfill" />
      <path
        d="M21.5,22H20V20h1.5a.5.5,0,0,0,.5-.5V18h2v1.5A2.5,2.5,0,0,1,21.5,22Z"
        :fill="_secondaryfill" />
      <path
        d="M17,22H15.5A2.5,2.5,0,0,1,13,19.5V18h2v1.5a.5.5,0,0,0,.5.5H17Z"
        :fill="_secondaryfill" />
      <rect
        x="13"
        y="8"
        width="2"
        height="3"
        :fill="_secondaryfill" />
      <rect
        x="22"
        y="8"
        width="2"
        height="3"
        :fill="_secondaryfill" />
      <rect
        x="13"
        y="13"
        width="2"
        height="3"
        :fill="_secondaryfill" />
      <rect
        x="22"
        y="13"
        width="2"
        height="3"
        :fill="_secondaryfill" />
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
