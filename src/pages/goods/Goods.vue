<template>
  <div>{{message}}</div>
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

<style scoped>

</style>
