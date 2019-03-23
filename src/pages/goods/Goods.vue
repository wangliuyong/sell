<template>
  <div class="goods-wrap">

    <div class="menue-wrap" ref="menue_scroll">
      <ul class="menue-list">
        <li v-for="(item,index) in goods" :class="{'currentClass':currentIndex===index}" class="item-list menue-list-hook" @click="()=>{selectFood(item.name)}">
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
            <li v-for="foodItem in item.foods" class="item-list">

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
              <div class="buy-account"></div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {BASE_URL} from '../../common/js/config'
  export default {
    name: "Goods",
    data:()=>{
      return {
        message:'商品',
        goods:[],
        iconList:['decrease','discount','guarantee','invoice','special'],
        foodList:{},
        listHeight:[],
        scrollY:0
      }
    },
    created() {
      this.$http.get(`${BASE_URL}/sell`).then(res => {
        this.goods=res.body.goods;
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
      currentIndex(){
        let listHeight=this.listHeight;
        for (let i = 0; i <listHeight.length ; i++) {
          let currentHeight=listHeight[i];
          let nextHeight=listHeight[i+1];
          if(!nextHeight||(this.scrollY>=currentHeight&&this.scrollY<nextHeight)){
            return i;
          }
        }
      }
    },
    methods:{
      selectFood(name){
        console.log(name);
        this.foodList=this.goods.filter((item)=>{
          return item.name===name;
        })[0];
        console.log(this.foodList)
      },
      //初始化scroll
      _initScroll(){
        this.menueScroll=new BScroll(this.$refs.menue_scroll,{});
        this.foodScroll=new BScroll(this.$refs.food_scroll,{
          probeType:3
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

        console.log(this.listHeight)
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
          background: #ffffff;
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
            background:url("./decrease.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.discount{
            background:url("./discount.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.guarantee{
            background:url("./guarantee.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.invoice{
            background:url("./invoice.png") no-repeat center center;
            background-size:16px 16px;
          }
          &.special{
            background:url("./special.png") no-repeat center center;
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
    .item-list{
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
