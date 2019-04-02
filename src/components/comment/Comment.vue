<template>
  <div class="rating_scroll" ref="rating_scroll">
    <div class="rating-content">
      <div class="rating-content_top">
        <div class="view_left">
          <h1>{{seller.score}}</h1>
          <p>综合评分</p>
          <p class="rankRate">高于周边商家的{{seller.rankRate}}%</p>
        </div>
        <div class="view_right">

          <div class="server_score">
            <span class="text">服务态度</span>
            <Star :score="seller.serviceScore"></Star>
          </div>
          <div class="server_score">
            <span class="text">服务态度</span>
            <Star :score="seller.serviceScore"></Star>
          </div>
          <div class="active_time">
            <div class="text">送达时间{{seller.deliveryTime}}分钟</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  import {BASE_URL} from '../../common/js/config'
  import Star from '../star/star'
  export default {
    name: "rating",
    components:{Star},
    data(){
      return {
        rating:{},
        seller:{}
      }
    },
    mounted(){
      this.$http.get(`${BASE_URL}/sell`).then(res => {
        this.seller=res.body.seller;
        this.rating=res.body.ratings;
        //异步渲染的数据，数据dom渲染完成后执行回调
        this.$nextTick(()=>{
          this._initScroll();
          //this._calculateHeight();
          //console.log(this.$refs);
          console.log('seller:',this.seller)
        })

      }, response => {
        // error callback
      });
    },
    props:{
      seller1:{
        type:Object
      }
    },
    methods:{
      _initScroll(){
        this.foodScroll=new BScroll(this.$refs.rating_scroll,{
          probeType:3,
          click:true
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .rating_scroll{
    position: absolute;
    top: 178px;
    left: 0;
    width: 100%;
    .rating-content{
      width: 100%;
      .rating-content_top{
        display: flex;
        padding: 18px 24px 18px 0;
        .view_left{
          flex-basis: 137px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          h1{
            font-size: 24px;
            line-height: 28px;
            color: rgb(253,153,0);
            margin-bottom: 6px;
          }
          p:nth-child(1){
             text-align: center;
             font-size: 12px;
             line-height: 12px;
             color: rgb(7,17,27);
             margin-bottom: 8px;
          }
          .rankRate{
            text-align: center;
            font-size: 10px;
            line-height: 10px;
            color: rgb(147,153,159);
            padding-top: 8px;
            margin-bottom:6px;
          }
        }
        .view_right{

          flex-grow: 1;
          font-size: 12px;
          line-height: 18px;
          color: rgb(7,17,27);

          .server_score{
            .star{
              display: inline-block;
              vertical-align: top;
            }
          }

        }

      }
    }
  }

</style>
