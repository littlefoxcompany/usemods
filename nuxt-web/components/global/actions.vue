<template><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <g :fill="fill">
      <path d="M37.435,17.972l-0.01-0.002L20,16V5c0-2.209-1.791-4-4-4s-4,1.791-4,4v24c0,0.553-0.448,1-1,1s-1-0.447-1-1 v-8c-2.761,0-5,2.239-5,5v5.791c0,2.94,1.012,5.824,2.792,8.042l4.37,6.713C12.346,46.829,12.662,47,13,47h26 c0.494,0,0.913-0.36,0.988-0.848l3.103-20.171C43.67,22.224,41.169,18.683,37.435,17.972z M23,38c0,0.553-0.448,1-1,1s-1-0.447-1-1 V27c0-0.553,0.448-1,1-1s1,0.447,1,1V38z M29,38c0,0.553-0.448,1-1,1s-1-0.447-1-1V27c0-0.553,0.448-1,1-1s1,0.447,1,1V38z M35,38 c0,0.553-0.448,1-1,1s-1-0.447-1-1V27c0-0.553,0.448-1,1-1s1,0.447,1,1V38z" :fill="fill"></path>
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