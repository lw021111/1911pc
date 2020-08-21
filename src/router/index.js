import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index/Index'
import Login from '@/components/Index/Login'
import List from '@/components/Index/List'
import Search from '@/components/Index/Search'
import Perslnfo from '@/components/Index/Perslnfo'
import Detail from '@/components/Index/Detail'
import Reg from '@/components/Index/Reg'

import VueResource from 'vue-resource'


Vue.config.productionTip = false
//使用http请求相关类库
Vue.use(VueResource)
Vue.use(Router)
// 确保post请求不会被转换为 options 请求
Vue.http.options.emulateJSON = true



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search
    },
    {
      path: '/Perslnfo',
      name: 'Perslnfo',
      component: Perslnfo
    },
  ]
})
