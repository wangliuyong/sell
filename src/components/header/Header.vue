<template>
  <div class="header">{{seller.name}}</div>
</template>

<script>
  export default {
    name: 'Header',
    created(){
      this.$http.get('https://easy-mock.com/mock/5bf6a26492b5d9334494e891/example/seller').then(res => {
        console.log(res);
        this.seller=res.body;
      }, response => {
        // error callback
      });
    },
    data() {
      return {
        seller:{}
      }
    }
  }
</script>

<style lang="less" scoped>
  .header {
    color: red;
  }
</style>





