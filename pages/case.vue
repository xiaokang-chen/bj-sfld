<template>
  <div>
    <pc-case class="pc" />
    <mobile-case class="mobile" />
  </div>
</template>

<script>
import PcCase from '@/container/pc/Case';
import MobileCase from '@/container/mobile/Case';

export default {
  head: {
    title: '北京圣福利达玻璃钢制品有限公司-客户案例',
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
    PcCase,
    MobileCase,
  },
};
</script>

<style lang="stylus" scoped></style>
