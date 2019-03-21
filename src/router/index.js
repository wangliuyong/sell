import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../pages/goods/Goods.vue'
import Seller from '../pages/seller/Seller.vue'
import Comment from '../pages/comment/Comment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },{
      path: '/seller',
      name: 'seller',
      component: Seller
    },{
      path: '/comment',
      name: 'comment',
      component: Comment
    },
  ],
  linkActiveClass:'active'
})
