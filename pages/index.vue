<template>
  <div>
    <pc-home class="pc" />
    <mobile-home class="mobile" />
  </div>
</template>

<script>
import PcHome from '@/container/pc/HomePcContainer';
import MobileHome from '@/container/mobile/HomeMobileContainer';

export default {
  head: {
    title: '北京圣福利达玻璃钢制品有限公司-为客户提供优质的用户体验',
    meta: [
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '冷却塔,玻璃钢制品,水箱,化粪池,采光罩,圣福利达',
      },
      {
        name: 'description',
        content:
          '北京圣福利达玻璃钢制品有限公司基于工业制冷场景，用先进的技术支持，帮助企业实践先进的制冷理念，持续获得较好的制冷效果，实现业务发展的目标。',
      },
    ],
  },
  components: {
    PcHome,
    MobileHome,
  },
};
</script>

<style lang="stylus" scoped></style>
