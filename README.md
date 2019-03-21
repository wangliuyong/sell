# sell

> A Vue.js project

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

