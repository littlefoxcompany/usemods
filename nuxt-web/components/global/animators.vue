<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <g :fill="fill">
      <g class="nc-loop-mouse-24-icon-f">
        <path
          d="M14,24H10a6.006,6.006,0,0,1-6-6V6a6.006,6.006,0,0,1,6-6h4a6.006,6.006,0,0,1,6,6V18A6.006,6.006,0,0,1,14,24ZM10,2A4,4,0,0,0,6,6V18a4,4,0,0,0,4,4h4a4,4,0,0,0,4-4V6a4,4,0,0,0-4-4Z"
          :fill="fill"></path>
        <path d="M12,12a1.5,1.5,0,0,1-1.5-1.5v-5a1.5,1.5,0,0,1,3,0v5A1.5,1.5,0,0,1,12,12Z" :fill="_secondaryfill"></path>
      </g>
    </g>
  </svg>
</template>
<style>
  .nc-loop-mouse-24-icon-f > :nth-child(2) {
    --animation-duration: 1s;
    transform-origin: 50% 50%;
    animation: nc-loop-mouse-anim var(--animation-duration) infinite;
  }

  @keyframes nc-loop-mouse-anim {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20%);
    }
  }
</style>

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
      _secondaryfill: function () {
        return this.secondaryfill || this.fill
      }
    }
  }
</script>
