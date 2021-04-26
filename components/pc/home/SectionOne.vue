<template>
  <div class="container">
    <div class="left">
      <div class="title">
        {{banner.title}}
      </div>
      <div class="subtitle">
        {{banner.titleIntroduce}}
      </div>
      <div class="phone_input">
        <a-input placeholder="请输入您的手机号" class="left_input" />
        <a-button type="primary" class="right_button">立即咨询</a-button>
      </div>
    </div>
    <div class="right">
      <video
        v-show="true"
        muted
        autoplay="autoplay"
        loop="loop"
        :poster="banner.systemPosition"
        class="right_video"
      >
        <source :src="banner.system1Position" type="video/webm" />
        <source :src="banner.system2Position" type="video/mp4" />
        <source :src="banner.system3Position" type="video/mp4" />
        您的浏览器不支持 video 标签。
      </video>
      <div class="breathe_container">
        <div class="breathe_animation"></div>
        <div
          class="breathe"
          @click="productVideoShow = true"
        ></div>
      </div>
    </div>
    <product-video v-if="productVideoShow" @close="productVideoShow = false" />
  </div>
</template>
<script>
import ProductVideo from '@/components/pc/home/ProductVideo';

export default {
  components: {
    ProductVideo,
  },
  data() {
    return {
      productVideoShow: false,
      banner: {
        title: '圣福利达,更环保节能的制冷',
        titleIntroduce: '让技术更人性化，让产品更智能化，客户更爱用的制冷产品',
        systemPosition: '/home/system.png',
        system1Position: '/home/system1.webm',
        system2Position: '/home/system2.mov',
        system3Position: '/home/system3.mp4',
      },
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  position relative
  display flex
  width 1280px
  margin 0 auto
  padding-left 80px
  padding-top 40px

.left
  display flex
  flex-direction column
  color #0e1421

.title
  z-index 100
  margin-top 27px
  font-size 48px
  font-weight bold

.subtitle
  font-size 18px
  margin-top 16px

.phone_input
  margin-top 40px

.left_input
  width 280px
  height 60px
  padding-left 32px
  border-radius 36px
  font-size 16px

.right_button
  position relative
  left -60px
  width 200px
  height 60px
  border-radius 36px
  font-size 18px
  font-weight bold

.right
  position relative
  display flex
  justify-content center
  align-items center
  margin-top -30px
  width 560px
  height 402px

.right_video
  width 100%
  height 100%

.breathe_container
  display flex
  justify-content center
  align-items center
  position absolute
  left 235px
  top 80px
  width 125px
  height 125px

.breathe
  z-index 3
  width 80px
  height 80px
  background url('/home/button_breathe.svg')
  background-repeat no-repeat
  background-size 80px 80px
  background-position center top
  cursor pointer

.breathe_animation
  position absolute
  border-radius 50%
  animation suofang 1s linear 0s infinite

// 动画从改变div大小改为改变边框大小
@keyframes suofang
  0%
    border 45px solid rgba(9, 74, 254, 0.5)
  100%
    border 60px solid rgba(9, 74, 254, 0.1)
</style>
