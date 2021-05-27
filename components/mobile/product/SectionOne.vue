<template>
  <div class="container">
    <a-breadcrumb class="breadcrumb">
      <a-breadcrumb-item><a href="/">首页</a></a-breadcrumb-item>
      <a-breadcrumb-item>{{productInfo[productId].product}}</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="product">{{productInfo[productId].product}}</div>
    <div class="product_intro">
      {{productInfo[productId].classIntro}}
    </div>
    <div class="table">
      <div v-for="(item, index) in productInfo[productId].url" :key="index" class="table_item">
        <img :src="item" class="table_item_img" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productId: -1,
      productInfo: [
        {
          id: 1,
          product: '冷却塔',
          classIntro: '冷却塔系列包括圆形逆流式、方形逆流式、方形横流式、闭式冷却塔',
          url: [
            '/product/lqt_1.jpg',
            '/product/lqt_2.jpg',
            '/product/lqt_3.jpg',
            '/product/lqt_4.jpg',
            '/product/lqt_5.jpg',
            '/product/lqt_6.jpg',
          ]
        },
        {
          id: 2, 
          product: '水箱',
          classIntro: '水箱的材质包括玻璃钢、不锈钢、搪瓷钢板、热镀锌',
          url: [
            '/product/shx_1.jpg',
            '/product/shx_2.jpg',
            '/product/shx_3.jpg',
            '/product/shx_4.jpeg',
            '/product/shx_5.jpg',
            '/product/shx_6.jpeg',
          ]
        },
        {
          id: 3, 
          product: '玻璃钢制品',
          classIntro: '玻璃钢制品系列产品包括运输罐、酸洗槽、化粪池',
          url: [
            '/product/blg_1.jpg',
            '/product/blg_2.jpg',
            '/product/blg_3.jpeg',
            '/product/blg_4.jpg',
            '/product/blg_5.jpg',
            '/product/blg_6.jpg',
          ]
        },
      ]
    }
  },
  created() {
    const id = this.$route.params.id - 1;
    this.productId = id;
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding 15px

.product
  margin-top 10px
  margin-bottom 15px
  font-size 22px
  font-weight bold
  color color-grey-10
  background color-grey-17

.product_intro
  font-size 16px
  color color-grey-16

.breadcrumb
  margin-top -8px
  font-size 14px
  border-bottom 1px dashed color-grey-15

.table
  display flex
  flex-wrap wrap
  margin-top 20px
  padding 10px
  border 1px dashed black

.table_item
  width 144px
  height 100px
  margin-right 15px
  margin-bottom 15px

.table_item_img
  width 100%
  height 100%
</style>