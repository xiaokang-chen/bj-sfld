<template>
  <div class="dots-wrap">
    <div
      v-for="(item, index) in Array(dots)"
      :key="index"
      data-sensors-click
      class="dot-outer"
      :class="{ active: activeIndex === index}"
      @click="dotClick(index)"
    >
      <div class="dot-inner" :style="{background:color}"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dots: {
      type: Number,
      default: 1,
    },
    activeIndex: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  methods: {
    dotClick(index) {
      this.$emit('click', index);
    },
  },
};
</script>

<style lang="stylus" scoped>
.dots-wrap
  display flex
  align-items center

.dot-outer
  width 12px
  height 12px
  margin-right 12px
  border-radius 50%
  box-sizing content-box
  display flex
  align-items center
  justify-content center
  background rgba(255, 255, 255, 0.2)

.dot-inner
  width 6px
  height 6px
  border-radius 50%
  opacity 0.8

.active
  border 1px solid #3784FF
</style>
