<template>
  <div class="shop-car">

    <div class="car-message">
      <div class="car-logo">
        <div class="logo">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconshopping_cart"></use>
          </svg>
        </div>
      </div>

      <span class="price">￥{{price}}</span>
      <span class="line"></span>
      <span class="delivery">另需配送费{{deliveryPrice}}元</span>
    </div>

    <div class="car-sumPrice">￥20起送</div>
  </div>
</template>

<script>
  export default {
    name: "shopcar",
    props:['price','deliveryPrice']
  }
</script>

<style scoped lang="less">
  .shop-car {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4;
    height: 50px;
    width: 100%;
    display: flex;
    color: rgba(255,255,255,0.4);
    background: #141d27;
    .car-message{
      flex: 1;
      display: flex;
      span{
        display: flex;
        align-items: center;
      }
      .price{
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;
      }
      .line{
        margin: 10px 12px;
        min-height:20px;
        width: 1px;
        background: rgba(255,255,255,0.2);
      }
      .delivery{
        font-weight: 200;
      }
      .car-logo{
        margin-top: -8px;
        margin-left: 18px;
        width: 50px;
        height: 50px;
        border-radius:50%;
        background: #141d27;
        border: 1px solid #141d27;
        display: flex;
        justify-content: center;
        align-items: center;
        .logo{
          width: 44px;
          height: 44px;
          border-radius:50%;
          background: rgba(0,0,0,0.2);
          display: flex;
          justify-content: center;
          align-items: center;
          .icon{
            width: 24px;
            height: 24px;
            fill: rgba(255,255,255,0.4);
          }
        }
      }
    }
    .car-sumPrice{
      flex-basis: 105px;
      width: 105px;
      font-size: 12px;
      font-weight: 700;
      color: rgba(255,255,255,0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0,0,0,0.2);
    }
  }
</style>
