<template>
  <div class="food-detail-wrap" v-show="showDetail"></div>
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
    created() {
      console.log(this.selectedFood)
    },
    updated() {
      console.log(this.selectedFood)
    }
  }
</script>

<style scoped lang="less">
  .food-detail-wrap{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    z-index: 3;
    background: #ffffff;
  }

</style>
