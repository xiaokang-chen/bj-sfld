<template>
  <li class="nav-item">
    <a v-if="nav.route" :href="nav.route" class="nav" :class="nav.className" :target="nav.target">
      <div class="title">{{ nav.title }}</div>
    </a>
    <div v-else class="nav" @click="handleShow()">
      <div class="title">
        {{ nav.title }}
      </div>
      <div v-if="!listShow" class="down">
        <img v-if="!contactShow" src="/mobile/down.svg" alt="" />
      </div>
      <div v-if="listShow" class="up">
        <img v-if="!contactShow" src="/mobile/up.svg" alt="" />
      </div>
    </div>
    <sub-nav
      v-if="nav.children && nav.children.length && listShow"
      class="sub"
      :sub-navs="nav.children"
      :sub-nav-title="nav.title"
    />
  </li>
</template>

<script>
import SubNav from './SubNav';

export default {
  components: {
    SubNav,
  },
  props: {
    nav: {
      type: Object,
      default: () => ({}),
    },
    active: {
      type: Boolean,
      default: false,
    },
    contactShow: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      listShow: false,
    };
  },
  methods: {
    handleShow() {
      this.listShow = !this.listShow;
    },
  },
};
</script>

<style lang="stylus" scoped>
.nav-item
  position relative
  border-bottom 1px solid #DFE2EB
.nav-item:last-child
  border-bottom none
.nav
  display block
  font-size 16px
  color rgb(14,20,33)
  font-weight 500
  line-height 68px
  cursor pointer
  overflow hidden
  .sub
    opacity 1
  .title
    float left
  .down
  .up
    float right

.sub
  opacity 0
  transition opacity  0.8s
  cursor auto
.bluenav
  color #3784FF
</style>
