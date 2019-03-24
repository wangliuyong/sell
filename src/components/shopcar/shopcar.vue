<template>

  <div class="shopcar-wrap">
    <div class="mask" v-show="showDetail"></div>
    <div class="shop-car-detail" v-show="showDetail">
      <div class="title">
        <h1 class="h1">购物车</h1>
        <span class="zero" @click="empty">清空</span>
      </div>
      <ul class="carList">
        <li v-for="item in selectFood" :key="item.id" class="list-item">
          <span class="name">{{item.name}}</span>
          <span class="control-wrap"><control :food="item"></control></span>
        </li>
      </ul>
    </div>
    <div class="shop-car">
      <div class="car-message">
        <div class="car-logo">
          <div class="logo" @click="toggleDetailList">
            <svg class="icon" aria-hidden="true" :class="{add_food:sumAccount>0}">
              <use xlink:href="#iconshopping_cart"></use>
            </svg>
            <span class="num" v-show="sumAccount>0">{{sumAccount}}</span>
          </div>
        </div>

        <span class="price" :class="{havefood:sumPrice>0}">￥{{sumPrice}}</span>
        <span class="line"></span>
        <span class="delivery">另需配送费{{deliveryPrice}}元</span>
      </div>

      <div class="car-sumPrice" :class="{pay:sumPrice-minPrice>=0}" @click="toPay">
        <span v-show="sumPrice===0">￥{{minPrice}}起送</span>
        <span v-show="sumPrice>0">{{lack}}</span>
      </div>
    </div>
  </div>

</template>

<script>

  import control from '../control/control'
  export default {
    name: "shopcar",
    components:{control},
    data(){
      return {
        showDetail:false
      }
    },
    props: {
      selectFood: {
        type: Array
      },
      price: {
        type: Number
      },
      deliveryPrice: {
        type: Number
      },
      minPrice: {
        type: Number
      }
    },
    computed: {
      sumPrice() {
        let tatal = 0;
        this.selectFood.forEach((item) => {
          tatal += item.price * item.count;
        });
        return tatal;
      },
      sumAccount() {
        let sumAccount = 0;
        this.selectFood.forEach((item) => {
          sumAccount += item.count;
        });
        return sumAccount;
      },
      lack() {
        let diff = this.sumPrice - this.minPrice;
        if (diff < 0) {
          return `￥还差${-diff}元`;
        } else {
          return `去支付`;
        }
      }
    },
    methods:{
      empty(){
        this.selectFood.forEach((item)=>{
          item.count=0;
        })
      },
      toggleDetailList(){
        this.showDetail=!this.showDetail;
      },
      toPay(){
        //console.log(this.sumPrice - this.sumPrice);
        if(this.sumPrice-this.minPrice>0){
          this.$router.push('/pay')
        }
      }
    }

  }
</script>

<style scoped lang="less">

  .shopcar-wrap{
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 4;
    width: 100%;
    .mask{
      position:fixed;
      top: 0;
      left: 0;
      z-index: -1;
      height: 100%;
      width: 100%;
      background: rgba(7,17,27,0.6);
      filter:blur(10px);
    }
    .shop-car-detail{
      background: #fff;
      .title{
        display: flex;
        align-items: center;
        height: 40px;
        width: 100%;
        background: #f3f5f7;
        border-bottom: 2px solid rgba(7,17,27,0.1);
        padding: 0 18px;

        h1{
          flex: 1;
          padding-left:2px;
          font-size: 14px;
          color: rgba(7,17,27);
          text-align: left;
        }
        .zero{
          font-size: 12px;
          color: rgba(0,160,220);
          text-align: right;
          flex: 1;
        }
      }

      .carList{
        max-height: 100px;
        overflow: scroll;
        padding: 10px 18px 10px 18px;
      }

      .list-item{
        display: flex;
        padding: 2px 0;
        align-items: center;
        border-bottom: 1px solid rgba(7,17,27,0.1);
        .name{
          flex: 1;
          ont-size: 14px;
          color: rgba(7,17,27);
          font-weight: 400;
        }
        .control-wrap{
          flex: 0 0 76px;
          vertical-align: middle;
          padding-bottom: 2px;
          justify-self: right;

        }
     }
    }
  }
  .shop-car {
    width: 100%;
    height: 50px;
    display: flex;
    color: rgba(255, 255, 255, 0.4);
    background: #141d27;

    .car-message {
      flex: 1;
      display: flex;

      span {
        display: flex;
        align-items: center;
      }

      .price {
        font-size: 16px;
        font-weight: 700;
        margin-left: 16px;

        &.havefood {
          color: #ffffff;
          font-size: 18px;
        }
      }

      .line {
        margin: 10px 12px;
        min-height: 20px;
        width: 1px;
        background: rgba(255, 255, 255, 0.2);
      }

      .delivery {
        font-weight: 200;
      }

      .car-logo {
        margin-top: -8px;
        margin-left: 18px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #141d27;
        border: 1px solid #141d27;
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.2);
          display: flex;
          justify-content: center;
          align-items: center;

          .num {
            position: absolute;
            top: -4px;
            right: -12px;
            width: 24px;
            font-size: 9px;
            line-height: 16px;
            font-weight: 700;
            color: #ffffff;
            background: rgba(240, 20, 20);
            border-radius: 6px 6px 6px 6px;
            display: flex;
            justify-content: center;
          }

          .icon {
            width: 24px;
            height: 24px;
            fill: rgba(255, 255, 255, 0.4);

            &.add_food {
              fill: #2790FF;
            }
          }
        }
      }
    }

    .car-sumPrice {
      flex-basis: 105px;
      width: 105px;
      font-size: 12px;
      font-weight: 700;
      color: rgba(255, 255, 255, 0.4);
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.2);

      &.pay {
        background: #2790FF;
      }

      .toPay {
        font-size: 12px;
        font-weight: 700;
        color: white;
      }
    }
  }
</style>
