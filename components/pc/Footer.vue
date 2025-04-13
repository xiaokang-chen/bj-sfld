<template>
  <footer class="footer_container">
    <div class="footer_content">
      <div class="footer_top">
        <div v-for="(item, index) in footerData" :key="index" class="top_item">
          <div class="title">{{item.title}}</div>
          <div v-for="(subitem, index) in item.subtitle" :key="index" class="sub_item">
            <div class="subtitle">{{subitem}}</div>
          </div>
        </div>
      </div>
      <div class="footer_bottom">
        <div class="bottom_left">
          <div v-for="(item, index) in left" :key="index" class="left_item">
            {{item}}
            <div class="right_line">|</div>
          </div>
        </div>
        <a href="https://beian.miit.gov.cn" target="_blank" class="beian">
          <span>{{mid1}}</span>
          <img src="/common/jingIcp.png" class="icp" />
          <span>{{mid2}}</span>
        </a>
        <span>{{right}}</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: [
        {title: '公司产品', subtitle: ['冷却塔', '玻璃钢制品', '水箱', '化粪池', '采光罩']},
        {title: '行业客户', subtitle: ['餐饮', '医疗', '教育', '化工', '纺织']},
        {title: '客户案例', subtitle: ['唐山金牛药业', '河北隆兴餐饮', '淮安医疗器械']},
        {title: '资质荣誉', subtitle: ['营业执照']},
        {title: '联系我们', subtitle: ['电话', '邮箱']},
        {title: '友情链接', subtitle: ['百度', '奇虎360', '谷歌搜索']}
      ],
      left: ['关于圣福利达', '法律声明', '联系我们', '帮助中心'],
      mid1: 'Copyright © 2019-2025 | ',
      mid2: '京ICP备20005387号-1',
      right: '北京圣福利达玻璃钢制品有限公司：bj-sfld.com'
    };
  },
};
</script>

<style lang="stylus" scoped>
.footer_container
  width 100%
  padding-bottom 60px
  z-index 1000
  background-color #232429

.footer_content
  display flex
  flex-direction column
  max-width 1440px
  min-width 1280px
  width 100%
  margin 0 auto

.footer_top
  display flex
  justify-content space-between
  height 100%
  padding 40px
  margin 0 40px
  border-bottom 1px solid hsla(0,0%,100%,.12)

.top_item
  padding 0px

.title
  font-size 16px
  color #8c99a6

.sub_item
  margin-top 20px

.subtitle
  font-size 14px
  color #fff

.footer_bottom
  display flex
  justify-content space-between
  padding 30px 0
  margin 0 40px
  color color-grey-9

.bottom_left
  display flex

.left_item
  position relative
  margin-right 15px
  &:last-child .right_line
    display none

.right_line
  position absolute
  top 0
  right -10px

.icp
  width 16px
  height 16px
  vertical-align -3px

 .beian
  color: #bcbfc8;
</style>
