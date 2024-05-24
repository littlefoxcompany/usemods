<template><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g :fill="fill">
      <g class="nc-loop-heart-24-icon-f">
        <path d="M19.562,6.446a4.9,4.9,0,0,0-6.941,0,4.965,4.965,0,0,0-.619.76,4.913,4.913,0,1,0-7.561,6.2L12,21l7.56-7.588a4.939,4.939,0,0,0,0-6.966Z" :fill="fill"></path>
        <circle cx="12" cy="12" r="12" :fill="_secondaryfill"></circle>
      </g>
    </g>
  </svg></template>

<style>
.nc-loop-heart-24-icon-f {
  --animation-duration: 1.8s
}

.nc-loop-heart-24-icon-f * {
  transform-origin: 50% 50%
}

.nc-loop-heart-24-icon-f :nth-child(1) {
  animation: nc-loop-heart-anim var(--animation-duration) infinite
}

.nc-loop-heart-24-icon-f :nth-child(2) {
  transform: scale(0);
  animation: nc-loop-heart-anim-2 var(--animation-duration) infinite
}

@keyframes nc-loop-heart-anim {

  0%,
  100%,
  20%,
  40% {
    transform: scaleY(1)
  }

  10%,
  30% {
    transform: scale(.8)
  }
}

@keyframes nc-loop-heart-anim-2 {
  0% {
    transform: scale(0);
    opacity: 1
  }

  100%,
  40% {
    opacity: 0;
    transform: scale(1)
  }
}
</style>

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