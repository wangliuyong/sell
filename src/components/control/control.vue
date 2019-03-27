<template>
    <div class="control">
      <transition name="slide-fade">
        <span class="decrease" v-show="food.count>0" @click="decrease">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconremove_circle_outline"></use>
          </svg>
        </span>
      </transition>
      <transition name="slide-fade">
        <span class="count" v-show="food.count>0">{{food.count}}</span>
      </transition>

      <span class="add" @click="add">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconadd_circle"></use>
          </svg>
      </span>
    </div>
</template>

<script>
  export default {
    name: "control",
    props:{
      food:{
        type:Object
      }
    },
    methods:{
      add(){
        if(!this.food.count){
          this.$set(this.food,'count',1);//父组件将food内存地址传了过来，修改就直接修改了父元素的food，vue中不能直接修改父元素传过来的prop
        }else{
          this.food.count++;
        }

      },
      decrease(){
        this.food.count--;
      }
    }
  }
</script>

<style scoped lang="less">

  /*过度效果*/
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .control{
    font-size: 0;
    vertical-align: middle;
    line-height: 22px;
    .decrease,.add{
      .icon{
        width: 24px;
        height: 24px;
        fill: #00A0DC;
        vertical-align: middle;
      }
      display: inline-block;
      font-size:24px;
      width: 20px;
      height: 20px;
      padding: 2px;
      text-align: center;
      line-height: 16px;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      border-radius: 50%;
      font-weight: 700;
    }
    .add{

    }
    .count{
      font-size: 10px;
      padding-left: 15px;
      padding-right: 7px;
    }
    .decrease{

    }

  }

</style>
