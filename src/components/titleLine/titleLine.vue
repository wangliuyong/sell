<template>
  <div class="title-line">
    <span class="line"></span>
    <span class="title">{{title}}</span>
    <span class="line"></span>
  </div>
</template>

<script>
  export default {
    name: "titleLine",
    props:{
      title:""
    }
  }
</script>

<style scoped lang="less">
.title-line{
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0px 0px 24px 0px;

  .title{
    font-size: 14px;
    line-height: 16px;
    font-weight: 700;
    text-align: center;
    padding: 0 12px;
  }
  .line{
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }
}
</style>
