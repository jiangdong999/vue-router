// 举例  之前的写法  先引入的话会 加载的很慢
// import Home from '../views/Home.vue'
// import Info from '../views/Info.vue'

const Home = {
  template:`<div>我是home</div>`
}

const routes = [
  {
    path:'/',
    component:Home//平时的做法
  },
  {
    path:'/home',
    component:() => import('@/views/Home.vue') //懒加载的写法  直接引入
  },
  {
    path:'/info',
    component:() => import('@/views/Info.vue') //懒加载的写法  直接引入
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router
})