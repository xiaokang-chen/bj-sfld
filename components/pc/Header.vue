<template>
  <header class="header_container">
    <div class="header_content">
      <a href="/">
        <img class="logo" src="@/static/logo.jpg" />
      </a>
      <nav class="header_nav">
        <div v-for="(nav, index) in navs" :key="index" class="nav_item">
          <a class="nav_title" :href="nav.href">{{nav.title}}</a>
          <span v-if="nav.children" class="arrow" />
          <div class="sub_nav">
            <div v-for="subNav in nav.children" :key="subNav.id" class="sub_item">
              {{subNav.title}}
            </div>
          </div>
        </div>
      </nav>
      <div class="header_contact">
        <div class="call">
          <span class="left_icon phone_icon"></span>
          <span class="phone">1390-123-9056</span>
        </div>
        <div class="header_trial">
          <a href="/">
            立即咨询
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          title: '公司产品', 
          children: [
            {id: 'lqt', title: '冷却塔', route: '/product/lqt'},
            {id: 'blg', title: '玻璃钢制品', route: '/product/blg'},
            {id: 'sx', title: '水箱', route: '/product/sx'},
            {id: 'hfc', title: '化粪池', route: '/product/hfc'},
            {id: 'cgz', title: '采光罩', route: '/product/cgz'},
            ]
        },
        {
          title: '解决方案', 
          children: [
            {id: 'canyin', title: '餐饮', route: '/solution/canyin'},
            {id: 'yiliao', title: '医疗', route: '/solution/yiliao'},
            {id: 'jiaoyu', title: '教育', route: '/solution/jiaoyu'},
            {id: 'huagong', title: '化工', route: '/solution/huagong'},
            {id: 'fangzhi', title: '纺织', route: '/solution/fangzhi'},
            ]
        },
        {title: '客户案例', href: '/case'},
        {title: '资质荣誉', href: '/honor'},
        {title: '关于我们', href: '/about'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.header_container
  position fixed
  top 0
  height 80px
  width 100%
  box-shadow 0 2px 4px 0 rgba(133, 138, 180, 0.14)
  z-index 1000
  background-color #fff

.header_content
  display flex
  justify-content space-between
  align-items center
  max-width 1440px
  min-width 1280px
  height 100%
  margin 0 auto

.logo
  width 240px
  height 80px

.header_nav
  display flex
  align-items center
  height 100%

.arrow
  height 6px
  width 10px
  position absolute
  top 36px
  right -1px
  background url('../../static/common/nav_arrow.svg') center center no-repeat

.nav_item
  display flex 
  position relative
  padding 0 17px
  height 100%
  margin-right 10px
  cursor pointer
  &:hover
    .arrow
      transform: rotate(180deg)
    .sub_nav
      visibility visible

.nav_title
  font-size 16px
  font-weight 500
  line-height 80px
  color #494d5a

.sub_nav
  position absolute
  top 80px
  visibility hidden
  display flex 
  flex-direction column
  padding 22px 0
  transition opacity 0.2s
  transform translateX(-25%)
  filter drop-shadow(0px 2px 10px rgba(30,36,53,0.18))
  box-shadow 0px 2px 10px 0px rgba(30,36,53,0.18)
  background-color #fff
  &:before
    content ' '
    position absolute
    top -24px
    left calc(50% - 12px)
    width 0
    height 0
    border solid 12px transparent
    border-bottom-color white

.sub_item
  padding 12px 36px
  font-size 16px
  color #494d5a
  white-space nowrap

.header_contact
  display flex
  align-items center
  margin-right 20px
  height 80px

// 电话效果
.call
  position relative
  display flex
  justify-content center
  align-items center
  width 178px
  height 41px
  margin-right 8px
  border-radius 20px
  border 1px solid rgba(223, 226, 235, 1)
  white-space nowrap
  cursor pointer
  background-color transparent
  &:before, &:after
    content ''
    position: absolute
    left 0
    top 0
    width: 0
    height 100%
    z-index -2
    border-radius 20px
  &:hover
    z-index 1
    background transparent
    .phone
      color #fff
    .phone_icon
      background url('/common/phone_white.svg') center center no-repeat
  &:before
    transition 0.3s
    background #3784FF
    z-index -1
  &:hover:after, &:hover:before
    width 100%

.phone
  height 40px
  line-height 40px
  font-size 16px
  font-weight 400
  color #3784FF
  background-color transparent

.left_icon
  margin-right 8px
  width 16px
  height 16px

.phone_icon
  background url('../../static/common/phone.svg') center center no-repeat

.header_trial
  margin-right 20px
  width 178px
  height 41px
  border-radius 30px
  cursor pointer
  text-align center
  line-height 41px
  font-weight 700
  background-color #3784ff
  a
    font-size 16px
    color #fff 
</style>
