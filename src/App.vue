<template>
  <div id="app">

    <Header :seller="seller"/>
    <div class="nav border-1px">
      <div class="nav-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/seller">商家</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/comment">评价</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script type="es6">
  import Header from './components/header/Header.vue'
  import {BASE_URL} from './common/js/config'

  export default {
    name: 'App',
    data(){
      return {
        seller:{}
      }
    },
    components: {
      Header
    },
    created() {
      this.$router.push('/goods');
      this.$http.get(`${BASE_URL}/sell`).then(res => {
        console.log(res.body);
        this.seller=res.body.seller;
        // this.goods=res.body.goods;
        //this.ratings=res.body.ratings;

        //console.log(this._data)

      }, response => {
        // error callback
      });
    }
  }
</script>

<style lang="less">
  @import '../src/common/style/base.less';
  @import '../src/common/style/common.less';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    .nav {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;

      position: relative;
      &:after{
        position: absolute;
        display: block;
        width: 100%;
        left: 0;
        bottom: 0;
        content: ' ';
        border-top: 1px solid @borderColor;
      }

      .nav-item {
        flex: 1;
        text-align: center;
        & > a {
          display: block;
          text-decoration: none;
          font-size: 14px;
          color: rgb(77,85,93);
          line-height: 14px;
          &.active{
            color: rgb(240,20,20);
          }
        }
      }


    }

  }
</style>
