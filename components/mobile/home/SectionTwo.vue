<template>
  <div class="container">
    <div class="product">主要产品&服务</div>
    <div v-for="item in product" :key="item.name" class="product_wrapper">
      <img :src="item.imgUrl" class="product_img" />
      <span class="product_title">{{item.name}}</span>
      <div class="product_intro">{{item.introduce}}</div>
      <a class="more">了解更多</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: [
        {name: '冷却塔', imgUrl: '/mobile/lqt.png', introduce: '冷却塔是一种独特的热交换器，它可使水和空气相互影响，从而降低水温'},
        {name: '水箱', imgUrl: '/mobile/shx.png', introduce: '水箱是一种用于水存储的创新设计，应用场景包括住宅和商用的饮用水，自由压制，制造型工厂等'},
        {name: '冷却塔维修服务', imgUrl: '/mobile/lqt_rep.gif', introduce: '根据您冷却塔的破损程度，进行塔皮更换、组件维修或者零件更换'},
        {name: '水箱维修服务', imgUrl: '/mobile/shx_rep.gif', introduce: '储水设备在工业设备中至关重要。当您的水箱出现损坏时，该服务可利用数字化技术进行修复'},
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  position relative
  background white

.product
  position relative
  text-align center
  padding-top 20px
  font-size 22px
  font-weight bold

.product_wrapper
  display flex
  flex-direction column
  align-items center
  margin 10px 20px
  padding: 30px 20px
  border 1px dashed black
  border-radius 20px

.product_img
  height 160px
  margin-bottom 15px

.product_title
  margin-bottom 10px
  font-size 18px
  font-weight bold 

.product_intro
  font-size 14px
  color color-grey-6

.more
  margin-top 20px
</style>
