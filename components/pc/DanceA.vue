<template>
  <img class="dance_a" src="@/static/common/dance_a.png" />
</template>

<style lang="stylus" scoped>
@keyframes up-and-down-a
  0%
    transform translateY(0)
  50%
    transform translateY(80px) rotateZ(38deg)
  100%
    transform translateY(0)
.dance_a
  width 280px
  transform-origin center
  animation-name up-and-down-a
  animation-iteration-count infinite
  animation-timing-function linear
  animation-duration 10s
</style>
