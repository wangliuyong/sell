<template>
  <div class="goods-wrap">
    <div class="menue-wrap" ref="menue_scroll">
      <ul class="menue-list">
        <li v-for="(item,index) in goods" :class="{'currentClass':currentIndex===index}" class="item-list menue-list-hook"
            @click="selectMenue($event,index)">
          <span class="icon" v-show="item.type>0" :class="iconList[item.type]"></span>
          <span class="text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="food-wrap" ref="food_scroll">
      <ul class="food-scroll" >
        <li v-for="item in goods" class="food-list-hook">
          <h1 class="name">{{item.name}}</h1>
          <ul class="food-list">
            <li v-for="foodItem in item.foods" class="item-list" >
             <div class="click-wrap" @click="toSelectFood(foodItem,$event)">
               <img :src="foodItem.image" alt="" width="60" height="60">
               <div class="content">
                 <h1 class="title">{{foodItem.name}}</h1>
                 <div class="dec">
                   <p v-show="foodItem.description" class="describle">{{foodItem.description}}</p>
                   <p class="message"><span class="sellCount">月售{{foodItem.sellCount}}份</span><span class="rating">好评率{{foodItem.rating}}%</span></p>
                 </div>
                 <p class="price">
                   <span class="newP">￥{{foodItem.price}}</span>
                   <span class="oldP" v-show="foodItem.oldPrice">￥{{foodItem.oldPrice}}</span>
                 </p>
               </div>
             </div>
              <control class="control-wrap" :food="foodItem"></control>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <ShopCar :price="200" :deliveryPrice="seller.deliveryPrice" :minPrice="seller.minPrice" :selectFood="selectFood"></ShopCar>
    <food :selectedFood="selectedFood" ref="food_detail"></food>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import ShopCar from '../shopcar/shopcar';
  import control from '../control/control';
  import food from '../food/food';
  import {BASE_URL} from '../../common/js/config';

  export default {
    name: "Goods",
    components:{ShopCar,control,food},
    data:()=>{
      return {
        message:'商品',
        goods:[],
        seller:{},
        iconList:['decrease','discount','guarantee','invoice','special'],
        foodList:{},
        listHeight:[],
        scrollY:0,
        selectedFood:{}
      }
    },
    created() {
      this.$http.get(`${BASE_URL}/sell`).then(res => {
        this.goods=res.body.goods;
        this.seller=res.body.seller;
        this.foodList=res.body.goods[0];
        //异步渲染的数据，数据dom渲染完成后执行回调
        this.$nextTick(()=>{
          this._initScroll();
          this._calculateHeight();
          //console.log(this.$refs);
        })

      }, response => {
        // error callback
      });
    },
    computed:{
      //计算滚动的区间的index
      currentIndex(){
        let listHeight=this.listHeight;
        for (let i = 0; i <listHeight.length ; i++) {
          let currentHeight=listHeight[i];
          let nextHeight=listHeight[i+1];
          if(!nextHeight||(this.scrollY>=currentHeight&&this.scrollY<nextHeight)){
            return i;
          }
        }
      },
      //找到选择食物
      selectFood(){
        let food=[];
        this.goods.forEach((item)=>{
          item.foods.forEach((item)=>{
            if(item.count>0){
              food.push(item);
              return 0;
            }
          })
        });
        return food;
      }
    },
    methods:{
      toSelectFood(food){
        this.selectedFood=food;
        this.$refs.food_detail.show();
      },
      selectMenue(event,index){
        // console.log(event,index);
        let foodList=this.$refs.food_scroll.getElementsByClassName('food-list-hook');
        let currentFood=foodList[index];
        this.foodScroll.scrollToElement(currentFood,300)
      },
      //初始化scroll
      _initScroll(){
        this.menueScroll=new BScroll(this.$refs.menue_scroll,{
          click:true
        });
        this.foodScroll=new BScroll(this.$refs.food_scroll,{
          probeType:3,
          click:true
        });
        //监听滚动距离
        this.foodScroll.on('scroll',(e)=>{
          this.scrollY=Math.abs(Math.round(e.y))
          //console.log( this.scrollY)
        })
      },
      _calculateHeight(){
        // let height=this.$refs.menue_scroll.getElementsByClassName('menue-list-hook');
        // console.log(height)
        let foodList=this.$refs.food_scroll.getElementsByClassName('food-list-hook');
        let height=0;
        this.listHeight.push(height);
        for (let i = 0; i <foodList.length ; i++) {
          height+=foodList[i].clientHeight;
          this.listHeight.push(height)
        }
        // console.log(this.listHeight)
      }
    }
  }
</script>

<style scoped lang="less">
.goods-wrap{
  display:flex;
  position: absolute;
  top: 178px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;
  .menue-wrap{
    flex: 0 0 80px;
    height: 100px;
    .menue-list{
      display: flex;
      flex-direction: column;

      .item-list{
        display:flex;
        justify-content: center;
        align-items: center;
        padding:0 12px 0 12px;
        height: 54px;
        width: 80px;
        background: #f3f5f7;
        border-bottom: 1px solid rgba(7,17,27,0.1);



        &.currentClass{
          position: relative;
          z-index: 1;
          margin-top: -1px;
          background: #ffffff;
          .text{
            font-size: 12px;
            line-height: 14px;
            font-weight: 800;
          }
        }
        &:hover{
          background: #ffffff;
        }
        .icon{
          display: inline-block;
          width: 16px;
          height: 16px;
          margin-right: 6px;
          padding: 0 0 12px 0;
          vertical-align: middle;
          &.decrease{
            background:url("decrease.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.discount{
            background:url("discount.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.guarantee{
            background:url("guarantee.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.invoice{
            background:url("invoice.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.special{
            background:url("special.png") no-repeat center center;
            background-size:16px 16px;
          }
        }
        .text{
          font-size: 12px;
          line-height: 14px;
          font-weight: 200;
        }
      }

    }
  }

  .food-wrap{
    flex: 1;
    height: 50px;
    .food-scroll{
      /*height: 100%;*/
      .food-list-hook{
          .food-list{
            .item-list{
              position: relative;
              .control-wrap{
                position: absolute;
                bottom: 15px;
                right: 36px;
              }
            }
          }
      }
  }
    .name{
      height: 26px;
      padding: 0 0 0 14px;
      background: #f3f5f7;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      line-height: 26px;
      color: rgba(147,153,159);
    }
    .click-wrap{
      display: flex;
      padding: 18px;
      .content{
        padding-left: 10px;



        .title{
          font-size: 14px;
          line-height: 14px;
          color: rgba(7,17,27);
          padding: 2px 0 8px 0;
        }
        .dec{
          font-size: 10px;
          line-height: 10px;
          color: rgba(147,153,159);

          .describle{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            width: 200px;
          }

          .sellCount{
            margin-right: 12px;
          }

          .message{
            margin-top: 8px;
          }
        }
        .price{
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
      }
    }
  }
}
</style>
