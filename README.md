# sell

> A Vue.js project

## 接口
` https://easy-mock.com/mock/5bf6a26492b5d9334494e891/example`

`/evaluation	`

评论	
 	

`/goods	`

商品列表	
 	
`/seller	`
商家

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

