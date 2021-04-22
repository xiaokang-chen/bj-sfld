<template>
  <img class="dance_k" src="@/static/common/dance_k.png" />
</template>

<style lang="stylus" scoped>
@keyframes up-and-down-k
  0%
    transform translateY(0)
  50%
    transform translateY(80px) rotateZ(16deg)
  100%
    transform translateY(0)
.dance_k
  width 280px
  animation-name up-and-down-k
  animation-iteration-count infinite
  animation-timing-function linear
  animation-duration 9s
</style>
