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
    name: "Star",
    props:{
      score:{
        type:Number
      }
    },
    mounted(){
      console.log(this.score)
    },
    computed:{
      classList(){
        let arr=[];
        let score = this.score;
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
  height: 100%;
  text-align: center;
  .star-item{
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 10px;
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
