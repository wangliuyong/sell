import Vue from 'vue'
import Router from 'vue-router'
import Goods from '../components/goods/Goods.vue'
import Seller from '../components/seller/Seller.vue'
import Comment from '../components/comment/Comment.vue'

Vue.use(Router);


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
