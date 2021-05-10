<template>
  <div class="container">
    <div class="contact">联系方式</div>
    <div class="card">
      <span class="company_name">{{company}}</span>
      <ul class="detail">
        <li>地址: 河北省廊坊市永清县后奕连接线</li>
        <li>电话: 13901239056</li>
        <li>邮箱: 17812122317@163.com</li>
      </ul>
    </div>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      company: '北京圣福利达玻璃钢制品有限公司'
    }
  }
}
</script>
<style lang="stylus" scoped>
.container
  position relative
  background white
  margin-top 20px

.contact
  position relative
  text-align center
  padding-top 20px
  font-size 22px
  font-weight bold

.card
  position relative
  margin 20px
  padding 15px
  text-align center
  border 1px solid color-grey-9

.company_name
  font-size 18px
  font-weight bold

.detail
  margin-top 20px

li
  font-size 14px
  text-align left
</style>