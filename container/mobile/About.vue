<template>
  <div class="container">
    <img src="/about/bg.jpg" class="bg_about"/>
      <div class="title">{{title}}</div>
      <div class="content">
        <div>&emsp;&emsp;{{content1}}</div>
        <img src="/about/company.jpg" class="company_about"/>
        <div>&emsp;&emsp;{{content2}}</div>
        <div>&emsp;&emsp;{{content3}}</div>
      </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      title: '北京圣福利达玻璃钢制品有限公司',
      content1: '圣福利达玻璃钢厂创立于2002年，位于北京大兴区，是一家致力于制冷产品、玻璃钢制品制造的企业。在持续创业创新过程中，圣福利达始终坚持“以客户为中心” \
            的理念，在一个个工程项目中不断提升技术和服务，获得了客户的普遍好评。',
      content2: '公司秉承以用户需求为核心，坚持“质量求优、服务一流”的经营理念，在行业中获得了客户的一致认可和高度评价。\
            为客户提供优质产品是我公司一贯坚持的基本准则，且公司专注于此进行着不懈的努力。',
      content3: '我公司在提供优质产品的同时，特别注重为用户服务，包括技术咨询、管道布置、产品选型、指导安装等，竭诚欢迎各设计院、厂商用户垂询惠顾。'
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width 100%

.bg_about
  width 100%
  height 100%

.title
  width 100%
  text-align center
  margin-top 20px
  font-size 18px
  font-weight bold

.content
  font-size 16px
  padding 15px

.company_about
  position relative
  left 50%
  transform translateX(-50%)
  width 200px
  background-size 100% 100%
</style>