<template>
  <transition name="fade">
    <div class="foodDetail-wrap" v-show="showDetail">

    </div>
  </transition>
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
      }
    },
    mounted() {
      //console.log(this.selectedFood)
    }
  }
</script>

<style scoped lang="less">

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .foodDetail-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 3;
    background: #ffffff;


  }

</style>
