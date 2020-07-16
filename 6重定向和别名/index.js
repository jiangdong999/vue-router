const Home = {
  template:`<div>我是home页</div>`
}
const Mine = {
  template:`<div>我是mine页</div>`
}
const Info = {
  template:`<div>我是Info页</div>`
}
const routes = [
  {
    path:'/',
    // redirect: '/home',//重定向home
    redirect: { name: 'Mine' },//命名路由重定向
  },
  {
    path: '/info', 
    alias: '/info11', //info11别名就是  info的另一种名字  也是可以加载的
    component: Info, 
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/mine',
    name:'Mine',
    component:Mine
  }
]

const router = new VueRouter({
  routes,
})

new Vue({
  el:'#app',
  router
})