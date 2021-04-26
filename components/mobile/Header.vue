<template>
  <div
    class="header-container"
    :class="{ 'navList-show-height': listShowHeight, 'navList-hide-height': listHideHeight }"
  >
    <div class="header" :class="{ move: move }">
      <div class="container">
        <div class="navs">
          <img src="/mobile/nav.svg" alt="顶部导航" @click="showNavList()" />
        </div>
        <div class="logo">
          <a href="/" target="_self"><img src="/logo.jpg" alt="圣福利达" /></a>
        </div>
        <div class="operation">
          <div class="order">
            <sfld-button aid="apply_header_button" href="/trial" target="_blank">
              免费试用
            </sfld-button>
          </div>
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
        { title: '视频面试', route: '/videoInterview' },
        {
          title: '产品功能',
          children: [
            {
              title: '产品',
              children: [
                { title: '招聘流程管理', route: '/features/pipeline' },
                { title: '企业人才库', route: '/features/talentpool' },
                { title: '招聘数据分析', route: '/features/data' },
              ],
            },
            {
              title: '服务',
              children: [{ title: '客户成功', route: '/features/customer' }],
            },
          ],
        },
        {
          title: '解决方案',
          children: [
            {
              title: '场景',
              children: [
                { title: '社招', route: '/solution/social' },
                { title: '校招', route: '/solution/campus' },
                { title: '内推', route: '/solution/recommend' },
                { title: '猎头', route: '/solution/hunter' },
              ],
            },
            {
              title: '行业',
              children: [
                { title: '互联网', route: '/solution/internet' },
                { title: '教育', route: '/solution/education' },
                { title: '零售', route: '/solution/retail' },
                { title: '金融', route: '/solution/finance' },
              ],
            },
          ],
        },
        { title: '客户案例', route: '/user' },
        {
          title: '资料中心',
          children: [
            {
              title: 'Moka活动',
              route: '/blog/category/huodong/',
              target: '_blank',
            },
            {
              title: '大咖点拨',
              route: '/blog/category/dakadianbo/',
              target: '_blank',
            },
            {
              title: 'Moka技巧',
              route: '/blog/category/mokajiqiao/',
              target: '_blank',
            },
            {
              title: 'HR智库',
              route: '/blog/category/hrzhiku/',
              target: '_blank',
            },
          ],
        },
        {
          title: '关于我们',
          children: [
            { title: '关于Moka', route: '/about' },
            {
              title: '加入我们',
              route: 'https://app.mokahr.com/apply/moka/2551',
              target: '_blank',
            },
            {
              title: '媒体报道',
              route: '/blog/category/meitibaodao',
              target: '_blank',
            },
          ],
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
html
  height 100%
body
  height 100%

.header-container
  position relative
  height 56px
.header
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

.navList-show-height
  height 100%
  position relative
  overflow hidden
.navList-hide-height
  height 56px
  position relative
  overflow hidden

.container
  position relative
  display inline-block
  min-width 321px
  height 100%
  &:after
    clearFloat()
  >div
  >ul
    float left
.navs
  width 20px
  height 17px
  margin-top 4px
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
  line-height 1
  margin-top 18px
  margin-left 28px
  width 99px
  a
    display block
    width 100%
    height 100%
    img
      width 99px
.operation
  margin-left 81px
  &:after
    clearFloat()
  >div
    float left
</style>
