<template>
  <div class="video-container" :class="{ 'picture-in-picture': pictureInPicture }">
    <div class="close" @click="handleClose">×</div>
    <video ref="video" class="video" :src="videoSrc" controls="controls" autoplay loop>
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
export default {
  props: {
    videoSrc: {
      type: String,
      default: '/home/introduce.mp4',
    },
  },
  data() {
    return {
      pictureInPicture: false,
    };
  },
  methods: {
    handleEnterPictureInPicture() {
      this.pictureInPicture = true;
    },
    handleLeavePictureInPicture() {
      this.pictureInPicture = false;
    },
    handleClose() {
      if (this.$refs.video) {
        this.$refs.video.pause();
        this.$refs.video.currentTime = 0;
      }
      this.$emit('close');
    },
  },
  mounted() {
    if (this.$refs.video) {
      this.$refs.video.play();
      this.$refs.video.addEventListener('enterpictureinpicture', this.handleEnterPictureInPicture);
      this.$refs.video.addEventListener('leavepictureinpicture', this.handleLeavePictureInPicture);
    }
  },
  beforeDestroy() {
    if (this.$refs.video) {
      this.$refs.video.pause();
      this.$refs.video.currentTime = 0;
      this.$refs.video.removeEventListener('enterpictureinpicture', this.handleEnterPictureInPicture);
      this.$refs.video.removeEventListener('leavepictureinpicture', this.handleLeavePictureInPicture);
      this.$refs.video.src = '';
    }
  },
};
</script>

<style lang="stylus" scoped>
.video-container
  position fixed
  left calc(50% - 421.5px)
  top calc(50% - 237px)
  width 843px
  height 474px
  background black
  z-index 1000
  &.picture-in-picture
    left -1000px

.video
  width 100%
  height 100%

.close
  position absolute
  right 20px
  top 20px
  font-size 32px
  line-height 14px
  height 14px
  color rgba(88, 99, 156, 0.7)
  cursor pointer
  z-index 1005
</style>
