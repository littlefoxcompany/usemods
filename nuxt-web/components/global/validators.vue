<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24">
    <g :fill="fill">
      <path
        d="M21.2,1.839L12.2,.039c-.129-.026-.263-.026-.392,0L2.808,1.839c-.469,.092-.808,.503-.808,.981V13c0,8,10,11,10,11,0,0,10-3,10-11V2.82c0-.476-.334-.886-.8-.981Zm-3.441,6.812l-6,7c-.181,.211-.442,.338-.721,.348-.013,0-.026,0-.039,0-.265,0-.519-.105-.707-.293l-3-3c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l2.236,2.236,5.297-6.18c.36-.418,.992-.468,1.41-.108,.419,.359,.468,.991,.108,1.41Z"
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
