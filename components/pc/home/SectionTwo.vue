<template>
    <div class="container">
        <section-title title="热销产品" />
        <div class="content">
          <div class="nav">
            <span
              v-for="(c, index) in category"
              :key="index"
              class="item"
              :class="{ active: c === currentCategory }"
              @click="currentCategory = c"
            > 
              {{ c.name }}
            </span>
          </div>
          <div class="cards">
            <div
              v-for="(item, index) in currentCategory.product"
              :key="index"
              class="card"
            >
              <img
                class="image"
                :src="`${item}`"
              />
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
    const initCategoryIdx = 0;
    const category = [
        {
          name: '冷却塔', 
          product: [
            '/product/lqt_1.jpg',
            '/product/lqt_2.jpg',
            '/product/lqt_3.jpg',
            '/product/lqt_4.jpg',
            '/product/lqt_5.jpg',
            '/product/lqt_6.jpg',
        ]},
        {
          name: '水箱',
          product: [
            '/product/shx_1.jpg',
            '/product/shx_2.jpg',
            '/product/shx_3.jpg',
            '/product/shx_4.jpeg',
            '/product/shx_5.jpg',
            '/product/shx_6.jpeg',
          ]
        },
        {
          name: '玻璃钢制品', 
          product: [
            '/product/blg_1.jpg',
            '/product/blg_2.jpg',
            '/product/blg_3.jpeg',
            '/product/blg_4.jpg',
            '/product/blg_5.jpg',
            '/product/blg_6.jpg',
          ]
        },
        {
          name: '化粪池', 
          product: [
            '/product/hfc_1.jpeg',
            '/product/hfc_2.jpeg',
            '/product/hfc_3.jpeg',
            '/product/hfc_4.jpeg',
            '/product/hfc_5.jpeg',
            // '/product/hfc_6.jpeg',
          ]
        },
        {
          name: '采光罩', 
          product: [
            '/product/cgz_1.jpg',
            '/product/cgz_2.jpeg',
            '/product/cgz_3.jpg',
          ]
        },
    ];
    return {
      category,
      currentCategory: category[initCategoryIdx],
    }
  },
  methods: {
    callback(){
      return 0
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  width 100%
  background-color color-blue-8

.content
  padding 15px

.nav
  width 1280px
  margin 0 auto
  height 90px
  padding-top 26px
  padding-left 30px
  box-shadow 0 14px 20px 0 rgba(14,20,33,0.05)
  border-radius 8px
  background white
  .item
    display inline-block
    width 120px
    height 38px
    line-height 38px
    text-align center
    font-size 18px
    color color-grey-5
    cursor pointer
    &:not(:last-child)
      margin-right 20px
    &.active
      font-weight bold
      background color-blue-1
      color white
      border-radius 19px

.cards
  display flex
  flex-wrap wrap
  width 1280px
  height 420px
  margin 40px auto
  padding 0 10px
  .card
    position relative
    display inline-block
    width 388px
    height 200px
    margin-right 40px
    margin-bottom 30px
    &:nth-child(3n)
      margin-right 0
  .image
    width 100%
    height 100%
    background-size contain
    border 1px solid #F3F4F9
    opacity 1
</style>