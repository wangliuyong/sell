
  
  > A Vue.js project
  ## 技术栈
  `vue vue-router vue-resource`
  
  ## 接口
  ` http://129.204.7.125:8001/sell`
  
  `ratings`
  
  评论	
   	
  
  `/goods	`
  
  商品列表	
   	
  `

## Build Setup
* 这里可配置路径别名

`
resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'components':resolve('../src/components')
    }
  },
`
* 可以通过$router.push()来进行跳转

`this.$router.push('/goods')`
* sticky footer

`

 .detail-wrap{
      min-height: 100%;
      border: 1px solid red;
      .detail-main{
        margin-top: 64px;
        padding-bottom: 64px;
        border: 1px solid green;
      }
    }
    
    .detail-close{
      position: relative;
      width: 32px;
      height: 32px;
      margin: -64px auto 0 auto;
      
      .icon{
        font-size: 32px;
      }
    }
  }

`


