<template>
  <div class="header">
    <div class="contentWrap">
      <div class="avatar">
        <img :src="seller.avatar" alt="header">
      </div>
      <div class="content">
        <div class="title">
          <span class="icon"></span>
          <span class="text">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
        <div v-if="seller.supports" class="supports-account">
          <span class="text">{{seller.supports.length}}个</span>
          <span class="icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow_right"></use>
          </svg>
        </span>
        </div>
      </div>
    </div>
    <div class="noticeWrap"></div>
  </div>
</template>

<script>

  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style lang="less" scoped src="./header.less">

</style>





