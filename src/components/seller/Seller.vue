<template>
  <div class="seller" ref="seller_scroll">
    <div class="seller-content">
      <div class="seller-header">
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="des">
            <Star :score="seller.score"></Star><span class="text1">（{{seller.ratingCount}}）</span><span class="text2">月销售{{seller.sellCount}}份</span>
          </div>
          <div class="collect" >
            <span @click.stop.prevent="troggleCollect">
              <svg class="icon" :class="{'collect-active':collect}" aria-hidden="true">
                <use xlink:href="#iconfavorite"></use>
              </svg>
            </span>
          </div>
        </div>
        <ul class="reference">
          <li class="content">
            <h1>起送价</h1>
            <p>{{seller.minPrice}}元</p>
          </li>
          <li class="content">
            <h1>商家配送费</h1>
            <p>{{seller.deliveryPrice}}元</p>
          </li>
          <li class="content">
            <h1>配送时间</h1>
            <p>{{seller.deliveryTime}}分钟</p>
          </li>
        </ul>
      </div>
      <Split></Split>
      <div class="selle-affical">
          <h1>公告与活动</h1>
          <p>{{seller.bulletin}}</p>
          <!--<ul class="message-list">-->
            <!--<li v-for="item in seller.supports" :key="this" class="list-item">-->
              <!--<span class="icon" :class="iconList[item.type]"></span>-->
              <!--<span class="text">{{item.description}}</span>-->
            <!--</li>-->
          <!--</ul>-->
      </div>
      <Split></Split>
      <div class="pics">
        <h1>商家实景</h1>
        <div class="pics-wrap" ref="pics_wrap">
          <ul ref="pics_width">
            <li class="pics-item" v-for="item in seller.pics">
              <img :src="item" alt="" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Star from '../star/star';
  import Split from '../split/split'
  import BScroll from 'better-scroll';
  import TitleLine from '../titleLine/titleLine'
  import {saveLocalStorage,getLocalStorage} from '../../common/js/localStorage'

  export default {
    name: "seller",
    components:{Star,TitleLine,Split},
    data(){
      return {
        collect:(()=>{
          return getLocalStorage(this.seller.id,'collect',false)
        })()
      }
    },
    props:{
      seller:{
        type:Object
      }
    },
    watch:{
      seller(){
        console.log('seller have change');
      }
    },
    mounted(){
      //this._initScroll();
      this._caculatePicsWidth();
      //console.log('sellerId:',this.collect);
    },
    methods:{
      troggleCollect(){
        this.collect=!this.collect;
        saveLocalStorage(this.seller.id,'collect',this.collect)
      },
      _initScroll(){
        this.sellerScroll=new BScroll(this.$refs.seller_scroll,{
          probeType:3,
          click:true
        });

        this.picsScroll=new BScroll(this.$refs.pics_wrap,{
          click:true,
          scrollY:true,
          //scroolX:true,
          eventPassthrough:'vertical'
        });
      },
      _caculatePicsWidth(){
        let width=120,margin=5;
        let picsWidth=(width+5)*(this.seller.pics.length)-margin;
        console.log(picsWidth);
        this.$refs.pics_width.style.width=picsWidth+'px';
        this.$nextTick(()=>{
          this._initScroll();
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .seller{
    position: absolute;
    top: 178px;
    bottom: 50px;
    width: 100%;
    overflow: hidden;
    .seller-content{

      .pics{
        padding: 18px;

        .pics-wrap{
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
         ul{
           .pics-item{
             display: inline-block;
             margin-right: 5px;
           }
         }
        }

        >h1{
          font-size: 14px;
          line-height: 14px;
          padding-bottom: 8px;
          font-weight: 700;
        }
      }
      .selle-affical{
        padding: 18px;

        >h1{
          font-size: 14px;
          line-height: 14px;
          padding-bottom: 8px;
          font-weight: 700;
        }

        >p{
          font-size: 12px;
          line-height: 24px;
          font-weight: 200;
          color: red;
        }

      }
      .reference{
        display: flex;
        padding: 0 18px 18px 18px;

        >li{
          flex-grow: 1;
          font-size: 10px;
          line-height: 10px;
          color: rgb(147,153,159);
          h1{
            padding-bottom: 4px;
            text-align: center;
          }
          p{
            font-size: 24px;
            font-weight: 200;
            line-height: 24px;
            color: rgb(7,17,27);
            text-align: center;
          }
        }

        >li:nth-child(2){
          border-left: 1px solid rgba(7,17,27,0.1);
          border-right: 1px solid rgba(7,17,27,0.1);
        }
      }
      .overview{
        position: relative;
        padding: 18px;

        .collect{
          position: absolute;
          top: 18px;
          right: 18px;

          .collect-active{
            fill:red;
          }
          .icon{
            width: 24px;
            height: 24px;
          }
        }
        h1{
          font-size: 14px;
          line-height: 14px;
          color: rgb(7,17,27);
          font-weight: 700;
        }
        .des{
          padding: 8px 0 18px 0;
          border-bottom: 1px solid rgba(7,17,27,0.1);
          >span{
            font-size: 10px;
            color: rgb(77,85,93);
          }

         >.text1{
            vertical-align: middle;
            margin-left: -28px;

          }
          .text2{
            vertical-align: middle;
            margin-left: 12px;
          }

          .star{
            width: 50%;
            display: inline-block;
            vertical-align: middle;
            margin-left: -14px;
            span{
              width: 10px;
              height: 10px;
              margin-right: 10px;
            }
          }
        }

      }
    }
  }
</style>
