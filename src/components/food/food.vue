<template>
    <div class="foodDetail-wrap" v-show="showDetail" ref="food_detail_scroll">
      <div>
        <div class="food-header">
          <div class="img-wrap">
            <img :src="selectedFood.image" alt="" width="100%" height="100%">
            <div class="back" @click="back">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconarrow_lift"></use>
              </svg>
            </div>
          </div>

          <div class="content">
            <h1>{{selectedFood.name}}</h1>
            <p class="sellCount"><span>月售{{selectedFood.sellCount}}份</span><span>好评率{{selectedFood.rating}}%</span></p>
            <p class="price">
              <span class="newP">￥{{selectedFood.price}}</span><span v-show="selectedFood.oldPrice" class="oldP">￥{{selectedFood.oldPrice}}</span>
            </p>
            <div class="control-wrap">
              <control :food="selectedFood"></control>
            </div>
          </div>
        </div>
        <div v-show="selectedFood.info" class="food-distruction">
          <h1>商品介绍</h1>
          <p>{{selectedFood.info}}</p>
        </div>
        <div class="food-comment" transition="fade">
          <h1>商品评价</h1>
        </div>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import control from '../control/control';
  export default {
    name: "food",
    components:{control},
    props:{
      selectedFood:{
        type:Object
      }
    },
    data(){
      return {
        showDetail:false,
        count:0
      }
    },
    mounted(){
      this._initScroll();
    },
    methods:{
      add(){
        this.$set(this.selectedFood,'count',this.count++)
      },
      show(){
        this.showDetail=true;
      },
      back(){
        this.showDetail=false;
      },
      _initScroll(){
        this.foodScroll=new BScroll(this.$refs.food_detail_scroll,{
          probeType:3,
          click:true
        });
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
  /*动画样式*/
  .fade-transition{
    opacity: 0.8;
    transition: all 0.5s;
  }
  .foodDetail-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    background: #f3f5f7;
    >div{
      background: #f3f5f7;
    }
    h1{
      font-size: 14px;
      line-height: 14px;
      color: rgba(7,17,27);
      font-weight: 700;
      padding-bottom: 8px;
    }
    .food-header{
      background: #ffffff;
      position: relative;
      .control-wrap{
        position: absolute;
        right: 18px;
        bottom: 20px;
      }
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
            width: 31px;
            height: 37px;
            fill:#fff;
          }
        }
      }
      .content{
        .price{
          position: relative;
          button{
            position: absolute;
            right: 0;
            display: inline-block;
            padding: 5px;
            border: none;
            padding: 6px 12px;
            -webkit-border-radius: 12px;
            -moz-border-radius: 12px;
            border-radius: 12px;
            background: rgba(0,160,220);
            font-size: 10px;
            line-height: 12px;
            color: #ffffff;
            text-align: right;
          }
          margin-top: 8px;
          .newP{
            font-size: 14px;
            line-height: 24px;
            font-weight: 700;
            color: red;
          }
          .oldP{
            font-size: 10px;
            line-height: 24px;
            font-weight: 700;
            color: rgba(147,153,159);
            text-decoration:line-through;
          }
        }
        padding: 18px;

        .sellCount{
          span{
            font-size: 10px;
            line-height: 10px;
            color: rgba(147,153,159);
            padding-bottom: 18px;
          }
        }


      }
    }
    .food-distruction{
      margin-top: 18px;
      padding: 18px;
      background: #ffffff;
      p{
        font-size: 12px;
        line-height: 24px;
        font-weight: 200;
        color: rgb(77,85,93);
      }
    }
    .food-comment{
      margin-top: 18px;
      padding: 18px;
      background: #ffffff;
    }

  }

</style>
