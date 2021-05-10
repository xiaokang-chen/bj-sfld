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
                :src="`/product/${item}`"
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
        {name: '冷却塔', product: ['lqt-1.jpeg', 'lqt-2.jpeg', 'cfct-3.jpg', 'cfct-4.jpg', 'cfct-5.jpg', 'cfct-6.jpg']},
        {name: '玻璃钢制品', product: ['blg-1.jpg', 'blg-2.jpg']},
        {name: '水箱', product: ['shx-1.jpg', 'shx-2.jpg', 'shx-3.jpg', 'shx-4.jpg']},
        {name: '化粪池', product: []},
        {name: '采光罩', product: []},
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
  justify-content space-between
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
    margin-bottom 26px
    &:nth-child(3n)
      margin-right 0
  .image
    width 100%
    height 100%
    background-size contain
    border 1px solid #F3F4F9
    opacity 1
</style>