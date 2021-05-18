<template>
  <div>
    <div class="container" :class="{ move: move }">
      <div class="content">
        <div class="navs">
          <img src="/mobile/nav.svg" alt="顶部导航" @click="showNavList()" />
        </div>
        <div class="logo">
          <a href="/" target="_self"><img src="/logo.png" alt="圣福利达" /></a>
        </div>
        <div>
          <sfld-button href="tel:13901239056" target="_blank">
            立即咨询
          </sfld-button>
        </div>
      </div>
    </div>
    <div v-if="navList" class="nav">
      <div class="nav-center">
        <sfld-nav
          v-for="(nav, index) in navs"
          :key="index"
          :nav="nav"
          :contact-show="contactShow"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button';
import Nav from './Nav';

export default {
  components: {
    sfldButton: Button,
    sfldNav: Nav,
  },
  data() {
    return {
      move: false,
      navList: false,
      listShowHeight: null,
      listHideHeight: null,
      contactShow: true,
      navs: [
        { title: '公司产品', 
          children: [
            { title: '冷却塔', route: '/' },
            { title: '玻璃钢制品', route: '/' },
            { title: '水箱', route: '/' },
            { title: '化粪池', route: '/' },
            { title: '采光罩', route: '/' },
          ]
        },
        {
          title: '解决方案',
          children: [
              { title: '餐饮', route: '/' },
              { title: '医疗', route: '/' },
              { title: '教育', route: '/' },
              { title: '化工', route: '/' },
              { title: '纺织', route: '/' },
          ],
        },
        { title: '客户案例', route: '/' },
        {
          title: '资质荣誉', route: '/'
        },
        {
          title: '关于我们', route: '/about'
        },
      ],
    };
  },
  mounted() {
    this.move = !!window.scrollY;
    window.addEventListener('scroll', () => {
      this.move = !!window.scrollY;
    });
  },
  methods: {
    showNavList() {
      this.navList = !this.navList;
      if (this.navList === true) {
        this.listShowHeight = true;
        this.listHideHeight = false;
      } else {
        this.listShowHeight = false;
        this.listHideHeight = true;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.container
  position fixed
  top 0
  left 0
  width 100%
  min-width 321px
  height 56px
  line-height 56px
  background #fff
  text-align center
  z-index 1000

.content
  position relative
  display flex
  justify-content space-between
  padding 0 15px
  margin 0 auto

.navList-show-height
  height 100%
  position relative
  overflow hidden

.navList-hide-height
  height 56px
  position relative
  overflow hidden

.navs
  width 56px
  height 56px
  img 
    width 24px

.nav
  width 100%
  height calc(100% - 56px)
  position fixed
  top 56px
  left 0
  background #fff
  z-index 999

.nav-center
  width 312px
  height 100%
  margin 0 auto

.logo
  height 100%
  a
    display block
    width 100%
    height 100%
    img
      height 50px
</style>
