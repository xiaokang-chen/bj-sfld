<template>
  <div v-swiper:mySwiper="swiperOption" class="container">
    <div class="swiper-wrapper banner">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner" class="item_img">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <!-- <pagination 
      :dots="3"
      class="page_dot" 
    /> -->
    <div class="phone">咨询热线:13901239056</div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Pagination from '../Pagination.vue'

export default {
  components: {
      Swiper,
      SwiperSlide,
      Pagination
    },
  data() {
    return {
      banners: [
        '/mobile/lunbo-1.jpg',
        '/mobile/lunbo-2.jpg',
        '/mobile/lunbo-3.jpg'
      ],
      swiperOption: {
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        initialSlide: 0,
        speed: 1800,
        effect: "fade",
        loop: true
      }
    }
  },
}
</script>
<style lang="stylus" scoped>
.container
  position relative
  height 360px

.banner
  position relative
  height 100%

.page_dot
  position absolute
  left 50%
  bottom 50px
  transform translate(-50%, -50%)
  z-index 5

.item_img
  height 100%
  width 100%

.phone
  position absolute
  top 10px
  left 10px
  color white
  font-size 20px
  white-space nowrap
  z-index 5
  animation change 2s ease-in-out infinite alternate
  
@keyframes change
  from
    transform scale(0.8)

.swiper-container /deep/ .swiper-pagination-bullets
  top 85%
  left 50%
  transform translate(-50%, -50%)

.swiper-container /deep/ .swiper-pagination-bullet
  background rgba(255, 255, 255, 0.8)
  opacity 0.5
  margin-right 15px

.swiper-container /deep/ .swiper-pagination-bullet-active
  background-color white
  box-shadow 0 0 0 4px rgba(255,255,255,0.3)
  opacity 1
</style>