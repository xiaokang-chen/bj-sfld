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

<style lang="stylus">
.mobile, .pc {
  display: none;
}

// 因为需要全局对宽高进行判定，所以布局针对所有
@media screen and (max-width: 768px) {
  .mobile {
    display: block;
  }
}

@media screen and (min-width: 769px) {
  .pc {
    display: block;
  }
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: #0e1421;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
