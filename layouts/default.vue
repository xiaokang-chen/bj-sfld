<template>
  <div>
    <pc-header class="pc" />
    <mobile-header class="mobile" />
    <Nuxt class="main_content" />
    <pc-footer class="pc" />
    <mobile-footer class="mobile" />
  </div>
</template>

<script>
import PcHeader from '@/components/pc/Header';
import PcFooter from '@/components/pc/Footer';
import MobileHeader from '@/components/mobile/Header';
import MobileFooter from '@/components/mobile/Footer';

export default {
  components: {
    PcHeader,
    PcFooter,
    MobileHeader,
    MobileFooter,
  },
}
</script>

<style lang="stylus" scoped>
.mobile, .pc {
  display: none;
}

.main_content {
  overflow hidden
}

// 因为需要全局对宽高进行判定，所以布局针对所有
@media screen and (max-width: 768px) {
  .mobile {
    display block
  }
  .main_content {
    padding-top 56px
  }
}

@media screen and (min-width: 769px) {
  .pc {
    display block
  }
  .main_content {
    padding-top 80px
  }
}
</style>
