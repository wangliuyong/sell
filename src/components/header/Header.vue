<template>
  <div class="header">
    <div class="background">
      <img :src="seller.avatar" alt="background" width="100%" height="100%">
    </div>
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
        <div v-if="seller.supports" class="supports-account" @click="showDetail">
          <span class="text">{{seller.supports.length}}个</span>
          <span class="icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconarrow_right"></use>
          </svg>
        </span>
        </div>
      </div>
    </div>
    <div class="noticeWrap">
      <span class="icon-gonggao">公告</span>
      <span class="text">{{seller.bulletin}}</span>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#iconarrow_right"></use>
      </svg>
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-wrap clearfix">
        <div class="detail-main"></div>
      </div>

      <div class="detail-close">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconclose"></use>
        </svg>
      </div>

    </div>
  </div>
</template>

<script>

  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return {
        detailShow:false
      }
    },
    methods:{
      showDetail(){
        this.detailShow=true;
      }
    }
  }
</script>

<style lang="less" scoped src="./header.less">

</style>





