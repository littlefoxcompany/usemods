<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g :fill="fill">
      <path
        d="M21,11c-.552,0-1-.447-1-1V5h-1c-.552,0-1-.447-1-1s.448-1,1-1h2c.552,0,1,.447,1,1v6c0,.553-.448,1-1,1Z"
        :fill="_secondaryfill" />
      <path
        d="M21,21c-1.654,0-3-1.346-3-3v-2c0-1.654,1.346-3,3-3s3,1.346,3,3v2c0,1.654-1.346,3-3,3Zm0-6c-.551,0-1,.448-1,1v2c0,.552,.449,1,1,1s1-.448,1-1v-2c0-.552-.449-1-1-1Z"
        :fill="_secondaryfill" />
      <path
        d="M15,24c-.552,0-1-.447-1-1V1c0-.553,.448-1,1-1s1,.447,1,1V23c0,.553-.448,1-1,1Z"
        :fill="fill" />
      <circle
        cx="7"
        cy="9"
        r="2"
        :fill="fill" />
      <path
        d="M12,20H3c-.551,0-1-.448-1-1V5c0-.552,.449-1,1-1H12V2H3C1.346,2,0,3.346,0,5v14c0,1.654,1.346,3,3,3H12v-2Z"
        :fill="fill" />
      <path
        d="M12,10.586l-5.707,5.707c-.286,.286-.372,.716-.217,1.09s.52,.617,.924,.617h5v-7.414Z"
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
