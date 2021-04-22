<template>
  <img class="dance_m" src="@/static/common/dance_m.png" />
</template>

<style lang="stylus" scoped>
@keyframes up-and-down-m
  0%
    transform translateY(0)
  50%
    transform translateY(80px) rotateZ(16deg)
  100%
    transform translateY(0)
.dance_m
  width 280px
  animation-name up-and-down-m
  animation-iteration-count infinite
  animation-timing-function linear
  animation-duration 8s
</style>
