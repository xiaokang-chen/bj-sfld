<template>
  <div class="container">
    <div class="product">主要产品</div>
    <div v-for="item in product" :key="item.id" class="product_wrapper">
      <img :src="item.imgUrl" class="product_img" />
      <span class="product_title">{{item.name}}</span>
      <div class="product_intro">{{item.introduce}}</div>
      <a class="more" :href="`/product/${item.id}`">了解更多</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      product: [
        {id: 1, name: '冷却塔', imgUrl: '/mobile/lqt.jpg', introduce: '冷却塔是一种独特的热交换器，它可使水和空气相互影响，从而降低水温。'},
        {id: 2, name: '水箱', imgUrl: '/mobile/shx.jpg', introduce: '水箱是一种用于水存储的创新设计，常用于住宅和商用的饮用水以及工业用水的存储。'},
        {id: 3, name: '玻璃钢制品', imgUrl: '/mobile/blg.jpg', introduce: '玻璃钢材料具有质轻、高强、防腐、保温、绝缘、隔音等诸多优点，可用于垃圾桶、餐桌、座椅等。'},
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
