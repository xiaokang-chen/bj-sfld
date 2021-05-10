<template>
  <div class="sub-nuv">
    <div
      v-for="(subNav, index) in subNavs"
      :key="index"
      :class="{
        kind: !subNav.route,
        'sub-nav-item': !!subNav.route,
      }"
    >
      <div v-if="!subNav.route">
        <a
          v-for="(child, childIndex) in subNav.children"
          :key="childIndex"
          class="sub-nav-item"
          :target="subNav.target || '_self'"
          :href="child.route"
        >
          {{ child.title }}
        </a>
      </div>
      <a v-else :target="subNav.target || '_self'" :href="subNav.route">{{ subNav.title }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subNavs: {
      type: Array,
      default: () => [],
    },
    active: {
      type: Boolean,
      default: false,
    },
    subNavTitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="stylus" scoped>
.sub-nuv
  width 312px
  background white
  line-height 1
  text-align left
  white-space nowrap
  z-index 1000

.kind
  display inline-block
  vertical-align top
  &:last-child
    margin-left 74px

.kind-name
  font-size 14px
  font-weight bold
  color color-grey-6

.sub-nav-item
  display block
  font-size 14px
  font-weight normal
  color #494D5A
  cursor pointer
  line-height 20px
  white-space nowrap
  margin 8px 0
  >a
    display block
    line-height 18px
    font-size 16px
    color color-grey-5
    font-weight normal
    white-space nowrap
  &:first-child
    margin-top 0
  &:last-child
    margin-bottom 10px
  &:hover
    color color-blue-1
    >a
      color color-blue-1
</style>
