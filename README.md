
  
  > A Vue.js project
  ## 技术栈
  `vue vue-router vue-resource better-scroll`
  
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


`<div class="box" ref="box1"></div>`


- this.$refs.box1去取得我们的DOM元素

- vue 更新dom时异步的，this.$nextTick(()=>{})更新后回调

- 使用this.$set(obj,key,value)给对象添加一个可响应的属性


-  better-scroll

    `
    import BScroll from 'better-scroll'
    let wrapper = document.querySelector('.wrapper')
    let scroll = new BScroll(wrapper)
    `

https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md

** 注意父元素要有高度，他会计算子元素高度，当子元素高度大于父元素高度时产生滚动 **



