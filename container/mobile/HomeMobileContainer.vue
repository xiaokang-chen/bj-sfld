<template>
  <div>
    <section-one />
    <section-two />
    <section-three />
  </div>
</template>

<script>
import SectionOne from '@/components/mobile/home/SectionOne';
import SectionTwo from '@/components/mobile/home/SectionTwo';
import SectionThree from '@/components/mobile/home/SectionThree';

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  },
};
</script>

<style lang="stylus" scoped>
</style>
