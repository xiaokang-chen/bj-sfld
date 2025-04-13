<template>
  <div>
    <img src="/about/bg.jpg" class="bg_about"/>
    <div class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/about">客户案例</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="title">{{title}}</div>
      <div class="content">&emsp;&emsp;{{content1}}</div>
      <img src="/about/company.jpg" class="company_about"/>
      <div class="content">&emsp;&emsp;{{content2}}</div>
      <div class="content">&emsp;&emsp;{{content3}}</div>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      title: '客户成功案例',
      content1: '北京圣福利达玻璃钢制品有限公司创立于2002年，位于北京大兴区，是一家致力于制冷产品、玻璃钢制品制造的企业。在持续创业创新过程中，圣福利达始终坚持“以客户为中心” \
            的理念，在一个个工程项目中不断提升技术和服务，获得了客户的普遍好评。',
      content2: '公司秉承以用户需求为核心，坚持“质量求优、服务一流”的经营理念，在行业中获得了客户的一致认可和高度评价。\
            为客户提供优质产品是我公司一贯坚持的基本准则，且公司专注于此进行着不懈的努力。',
      content3: '我公司在提供优质产品的同时，特别注重为用户服务，包括技术咨询、管道布置、产品选型、指导安装等，竭诚欢迎各设计院、厂商用户垂询惠顾。'
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
</style>