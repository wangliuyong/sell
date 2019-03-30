<template>

    <div class="foodDetail-wrap" v-show="showDetail">
      <div class="food-header">
        <div class="img-wrap">
          <img :src="selectedFood.image" alt="" width="100%" height="100%">
          <div class="back" @click="back">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconarrow_lift"></use>
            </svg>
          </div>
        </div>

        <h1>{{selectedFood.name}}</h1>
        <p><span>月售{{selectedFood.sellCount}}份</span><span>好评率{{selectedFood.rating}}%</span></p>
        <div><span>￥{{selectedFood.price}}</span><span v-show="selectedFood.oldPrice">￥{{selectedFood.oldPrice}}</span></div>
        <button>加入购物车</button>
      </div>
      <div class="food-distruction">
        <h1>商品介绍</h1>
        <p></p>
      </div>
      <div class="food-comment">
        <h1>商品评价</h1>
      </div>
    </div>

</template>

<script>
  export default {
    name: "food",
    props:{
      selectedFood:{
        type:Object
      }
    },
    data(){
      return {
        showDetail:false
      }
    },
    methods:{
      show(){
        this.showDetail=true;
      },
      back(){
        this.showDetail=false;
      }
    },
    created() {
      console.log(this.selectedFood)
    },
    updated() {
      console.log(this.selectedFood)
    }
  }
</script>

<style scoped lang="less">


  .foodDetail-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 3;
    background: #ffffff;
    .food-header{
      .img-wrap{
        position: relative;
        z-index: 5;
        width: 100%;
        height: 0;
        padding-top: 100%;
        img{
          position: absolute;
          top: 0;
          left: 0;
        }
        .back{
          position: absolute;
          top: 7px;
          left: 3px;
          width: 20px;
          height: 20px;
          font-size: 12px;
          .icon{
            width: 20px;
            height: 20px;
            fill:#fff;
          }
        }
      }
    }
  }

</style>
