<template>
  <footer class="footer_container">
    <div class="footer_top">
      <div v-for="item in data" :key="item.title" class="footer_item">
        <span class="title">{{item.title}}</span>
        <div class="item_wrapper">
          <span v-for="(it, index) in item.content" :key="index" class="item">{{it}}</span>
        </div>
      </div>
    </div>
    <div class="footer_bottom">
      <div>
        <span>{{mid1}}</span>
        <img src="/common/jingIcp.png" class="icp" />
        <span>{{mid2}}</span>
      </div>
      <div>{{companyUrl}}</div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {title: '公司产品', content: ['冷却塔', '玻璃钢制品', '水箱', '化粪池', '采光罩']},
        {title: '解决方案', content: ['餐饮', '医疗', '教育', '化工', '纺织']},
        {title: '关于我们', content: ['了解圣福利达', '联系我们']}
      ],
      mid1: '© 2019-2022 | ',
      mid2: '京ICP备20005387号-1',
      companyUrl: '北京圣福利达玻璃钢制品有限公司：bj-sfld.com'
    }
  }
}
</script>
<style lang='stylus' scoped>
.footer_container
  position relative
  min-height 130px
  background color-grey-2

.footer_top
  display flex
  flex-direction column
  padding 10px 0
  margin 0 15px
  border-bottom 1px solid hsla(0,0%,100%,.12)

// .footer_item
  // display flex
  // font-size 18px

.title
  font-size 17px
  color color-grey-7

.item_wrapper
  display flex
  width 180px
  flex-wrap wrap
  padding 7px 0

.item
  margin-right 10px
  padding-bottom 3px
  font-size 15px
  color white

.footer_bottom
  display flex
  flex-direction column
  padding 20px 0
  margin 0 15px
  color #bcbfc8

.icp
  width 16px
  height 16px
  vertical-align -3px
</style>
