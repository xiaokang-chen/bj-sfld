<template>
  <div>
    <img src="/about/bg.jpg" class="bg_about"/>
    <div class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/about">关于我们</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="title">{{title}}</div>
      <div class="content">&emsp;&emsp;{{content1}}</div>
      <img src="/about/company.jpg" class="company_about"/>
      <div class="content">&emsp;&emsp;{{content2}}</div>
      <div class="content">&emsp;&emsp;{{content3}}</div>
      <div class="contact_title">联系方式</div>
      <div class="contact_title_en">Contact Us</div>
      <div class="contact" v-html="contact"></div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      title: '关于我们',
      content1: '北京圣福利达玻璃钢制品有限公司创立于2002年，位于北京大兴区，是一家致力于制冷产品、玻璃钢制品制造的企业。在持续创业创新过程中，圣福利达始终坚持“以客户为中心” \
            的理念，在一个个工程项目中不断提升技术和服务，获得了客户的普遍好评。',
      content2: '公司秉承以用户需求为核心，坚持“质量求优、服务一流”的经营理念，在行业中获得了客户的一致认可和高度评价。\
            为客户提供优质产品是我公司一贯坚持的基本准则，且公司专注于此进行着不懈的努力。',
      content3: '我公司在提供优质产品的同时，特别注重为用户服务，包括技术咨询、管道布置、产品选型、指导安装等，竭诚欢迎各设计院、厂商用户垂询惠顾。',
      contact: `联系人：陈经理<br>
        手机：13901239056<br>
        固定电话：010-67684960<br>
        单位地址：北京大兴区北藏村镇赵家场村村委会东100米`
    }
  }
}
</script>
<style lang="stylus" scoped>
.bg_about
  width 100%
  height 100%

.content
  max-width 1440px
  width 100%
  margin 0 auto
  padding 10px 20px

.title
  text-align center
  font-size 24px
  font-weight bold 

.content
  font-size 16px

.company_about
  position relative
  left 50%
  transform translateX(-50%)
  background-size 100% 100%

.contact_title
  text-align center
  font-size 24px
  font-weight bold
  margin-top 20px

.contact_title_en
  text-align center
  font-size 16px
  font-weight bold
  color color-grey-15

.contact
  width 500px
  height 180px
  display flex
  justify-content center
  align-items center
  margin 20px auto
  border 1px solid black
  font-size 18px
</style>