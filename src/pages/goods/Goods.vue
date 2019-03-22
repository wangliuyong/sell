<template>
  <div class="goods-wrap">
    <div class="menue-wrap"></div>
    <div class="food-wrap"></div>
  </div>
</template>

<script>
  export default {
    name: "Goods",
    data:()=>{
      return {
        message:'商品'
      }
    },
    created() {
      // console.log(this.$router.push('/'))
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
  border: 1px solid red;
  .menue-wrap{
    flex: 0 0 80px;
  }

  .food-wrap{
    flex: 1;
  }
}
</style>
