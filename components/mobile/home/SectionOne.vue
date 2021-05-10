<template>
  <div class="container">
    <!-- <div class="company">北京圣福利达玻璃钢制品有限公司</div>
    <div class="phone">电话：1390-123-9056</div> -->
    <swiper class="swiper-container banner" :options="swiperOption" :auto-play="true">
      <swiper-slide 
        v-for="(item, index) in banners" 
        :key="index" 
        class="swiper-item item" 
        :style="{backgroundImage: `url('${item.url}')`}"
      >
      <div class="background_overlay"></div>
      <div class="background_content">{{item.content}}</div>
      </swiper-slide>
      <div class="swiper-pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
      Swiper,
      SwiperSlide
    },
  data() {
    return {
      banners: [
        {url: '/mobile/carousel_1.jpg', content: '规模化HVAC系统'},
        {url: '/mobile/carousel_2.gif', content: '先进的水管理系统'}, 
        {url: '/mobile/carousel_3.gif', content: '数字智能IOT设备'}
      ],
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true //允许分页点击跳转
        },
        initialSlide: 0,
        speed: 2000,
        effect: "fade",
        loop: true
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  height 360px
// .company
//   text-align center
//   font-size 22px
//   font-weight 600

// .phone
//   font-size 20px
.banner
  height 100%

.item
  position relative
  display flex
  justify-content center 
  align-items center
  background-position center center
  background-repeat no-repeat
  background-size auto 100%

.background_overlay
  position absolute
  height 100%
  width 100%
  top 0
  left 0
  background-color rgba(0,0,0,0.5)
  z-index 2 

.background_content
  font-size 24px
  color white
  font-weight bold
  z-index 3

.swiper-container /deep/ .swiper-pagination-bullets
  top 85%
  left 50%
  transform translate(-50%, -50%)

.swiper-container /deep/ .swiper-pagination-bullet
  background color-grey-13
  opacity 0.5
  margin-right 10px

.swiper-container /deep/ .swiper-pagination-bullet-active
  background-color white
  opacity 1
</style>