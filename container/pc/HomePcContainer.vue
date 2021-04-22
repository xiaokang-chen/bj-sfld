<template>
  <div>
    <header-pc />
    <section-one />
    <section-two />
    <!-- <dance-m class="dance-m" /> -->
    <!-- <dance-o class="dance-o" /> -->
    <!-- <dance-k class="dance-k" />
    <dance-a class="dance-a" /> -->
    <footer-pc />
  </div>
</template>

<script>
import DanceM from '@/components/pc/DanceM';
import DanceO from '@/components/pc/DanceO';
import DanceK from '@/components/pc/DanceK';
import DanceA from '@/components/pc/DanceA';
import SectionOne from '@/components/pc/home/SectionOne';
import SectionTwo from '@/components/pc/home/SectionTwo';
import HeaderPc from '@/components/pc/HeaderPc';
import FooterPc from '@/components/pc/FooterPc';

export default {
  components: {
    HeaderPc,
    DanceM,
    DanceO,
    DanceK,
    DanceA,
    SectionOne,
    SectionTwo,
    FooterPc,
  },
};
</script>

<style lang="stylus" scoped>
.dance-m
  position absolute
  top 300px
  right -80px
.dance-o
  position absolute
  top 300px
  left -90px
.dance-k
  position absolute
  top 2550px
  right -80px
  z-index 100
.dance-a
  position absolute
  top 3850px
  left -100px
  z-index 100
</style>
