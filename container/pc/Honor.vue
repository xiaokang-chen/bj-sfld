<template>
  <div>
    <img src="/about/bg.jpg" class="bg_about"/>
    <div class="content">
      <a-breadcrumb class="breadcrumb">
        <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
        <a-breadcrumb-item><a href="/about">企业荣誉</a></a-breadcrumb-item>
      </a-breadcrumb>
      <div class="title">{{title}}</div>
      <!-- CRAA 认证卡片 -->
      <div class="honor_container">
        <div class="honor_title">中国制冷空调工业协会CRAA认证会员</div>
        <div class="honor_content">
          <div class="honor_left">
            <div>
              <strong>认证范围：</strong>
              <span>玻璃钢冷却塔系列产品</span>
            </div>
            <div>
              <strong>技术标准：</strong>
              <span>GB/T 7190.1-2018《机械通风冷却塔》</span>
            </div>
            <div>
              <strong>行业地位：</strong>
              <br/>
              <ul>
                <li>华北地区首批通过耐腐蚀性A级检测（-30℃~120℃工况）</li>
                <li>产品能效比优于国家标准10%</li>
                <li>华北地区玻璃钢制品行业主要供应商之一，服务超过200家工业企业</li>
                <li>全系列产品通过ISO9001质量管理体系认证，建立从原料到成品的全流程品控标准</li>
              </ul>
            </div>
          </div>
          <img class="honor_right" src="/common/zhengshu.jpeg" />
        </div>
      </div>
      <br/>

      <!-- ISO 认证卡片 -->

    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      title: '资质荣誉',
      glowIndex: null,
      isoStandards: [
        'ISO 9001:2015', 
        'ISO 14001:2015',
        'ISO 45001:2018'
      ]
    }
  },
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

.honor_container
  position relative
  display flex
  flex-direction column
  width 1280px
  margin 0 auto
  padding-left 40px
  padding-top 40px

.honor_title
  z-index 100
  margin-top 27px
  font-size 32px
  font-weight bold

.honor_content
  display flex

.honor_left
  display flex
  flex-direction column
  margin-top 40px
  margin-right 20px
  line-height 30px

.honor_right
  position relative
  width 450px
  height 300px
</style>