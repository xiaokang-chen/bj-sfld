<template>
  <div class="container">
    <section-title title="品牌故事" />
    <div class="story">
      圣福利达是一家专业制作冷却塔、水箱、玻璃钢制品的工业产品制造商。<br>
          十八年来，一直秉承着服务至上的理念经营。
    </div>
    <div class="content">
      <div class="left_img">
        <img src="/home/story.jpg" class="inner_img" />
      </div>
      <div class="right_text">
        <div v-for="(item, index) in company" :key="index" class="text_item">
          <div class="text_title">{{item.title}}</div>
          <div class="text_content">{{item.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SectionTitle from '@/components/pc/SectionTitle'
export default {    
  components: {
    SectionTitle,
  },
  data() {
    return {
      company: [
        {title: '产品优质', text: '圣福利达从2002年起，拥有18年的工程经验，在数以万计的工程积累中，不断完善产品质量，获得客户的一致好评！'},
        {title: '服务周到', text: '公司拥有完善的售后保障，让客户买的安心、用的放心！'},
        {title: '用户满意', text: '在大大小小的项目中，受到客户的好评，回客率高！'}
      ] 
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width 100%
  background-color #f0f0f0

.story
  text-align center
  font-size 16px
  color #0e1421
  margin-top 30px

.content
  display flex
  justify-content space-between
  width 1080px
  margin 0 auto
  padding 40px

.left_img
  position relative
  width 400px
  height 300px
  border-radius 20px

.inner_img
  display block
  width 100%
  height 100%
  margin-bottom 20px
  border-radius 20px

.left_img:after
  position: absolute
  content ''
  width 100%
  height 100%
  top 0
  left 0
  box-shadow 0 0 20px 10px #fff inset
  border-radius 20px

.right_text
  display flex
  flex-direction column
  width 440px

.text_item
  display flex
  flex-direction column
  margin-bottom 20px

.text_title
  font-size 24px
  font-weight bold

.text_content
  font-size 16px
</style>