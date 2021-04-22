<template>
  <div class="container">
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  padding-top 20px
  font-size 36px
  font-weight bold 
  text-align center
  color #0e1421
</style>