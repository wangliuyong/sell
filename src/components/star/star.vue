<template>
<div class="star">
  <span v-for="itemClass in classList" class="star-item" :class="itemClass"></span>
</div>
</template>

<script>
  const LENGTH=5;
  const CLS_ONE="one";
  const CLS_OFF="off";
  const CLS_HALF="half";

  export default {
    name: "star",
    props:{
      score:{
        type:Number
      }
    },
    computed:{
      classList(){
        let arr=[];
        let score = this.score
        let oneAccount=Math.floor(score);
        let halfAccount = score % 1 !== 0;

        for (let i=0;i<oneAccount;i++){
          arr.push(CLS_ONE)
        }
        if(halfAccount){
          arr.push(CLS_HALF)
        }
        while(arr.length<LENGTH){
          arr.push(CLS_OFF)
        }
        //console.log(arr)
        return arr
      }
    }
  }
</script>

<style scoped lang="less">
.star{
  height: 24px;
  text-align: center;
  padding: 16px 0 28px 0;
  .star-item{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 20px;
    &.one{
      background: url("./one.png") no-repeat center center;
      background-size: cover;
    }
    &.half{
      background: url("./half.png") no-repeat center center;
      background-size: cover;
    }
    &.off{
      background: url("./off.png") no-repeat center center;
      background-size: cover;
    }
  }
}

</style>
