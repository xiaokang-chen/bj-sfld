<template>
  <img class="dance_o" src="@/static/common/dance_o.png" />
</template>

<style lang="stylus" scoped>
@keyframes up-and-down-o
  0%
    transform translateY(0)
  50%
    transform translateY(80px) rotateZ(-32deg)
  100%
    transform translateY(0)
.dance_o
  width 290px
  transform-origin center
  animation-name up-and-down-o
  animation-iteration-count infinite
  animation-timing-function linear
  animation-duration 7s
</style>
