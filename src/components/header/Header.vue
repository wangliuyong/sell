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

<style lang="less" scoped>
  @import "../../common/icon/icon.css";

  .header {
    color: #fff;
    background: #cccccc;

    .contentWrap {
      position: relative;
      padding: 24px 12px 18px 24px;
      font-size: 0;
      .avatar {
        display: inline-block;
        img {
          width: 68px;
          border-radius: 2px;
        }
      }



      .content {

        display: inline-block;
        vertical-align: top;
        font-size: 14px;
        margin-left: 16px;


        .supports-account{
          position: absolute;
          right: 12px;
          bottom: 14px;
          padding: 7px 8px;
          border-radius:8px;
          background-color: rgba(0,0,0,0.2);

          .text{
            color: #fff;
            font-size: 10px;
            line-height: 12px;
            font-weight: 200;
            margin-right: 2px;
            vertical-align: middle;
          }
          .icon{
            vertical-align: middle;
          }
        }



        .title {
          font-size: 16px;
          font-weight: bold;
          color: #fff;
          line-height: 18px;
          padding: 2px 0 8px 0;

          .icon {
            display: inline-block;
            width: 30px;
            height: 18px;
            background: url("../../../resource/img/brand@2x.png") no-repeat center center;
            background-size: cover;
            vertical-align: middle;
            margin-right: 6px;
          }

          .text {
            //--F:\code\study\sell\resource\img\decrease_1@2x.png
          }
        }

        .description {
          font-size: 12px;
          line-height: 12px;
          font-weight: 200;
          padding-bottom: 10px;
        }

        .supports {
          font-size: 10px;
          line-height: 12px;
          font-weight: 200;
          padding-bottom: 2px;

          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            vertical-align: bottom;
            background: url("../../../resource/img/decrease_1@2x.png") no-repeat center center;
            background-size: cover;
            margin-right: 4px;
          }
        }
      }
    }
  }
</style>





