
const Home={
  template:`<div>我是home</div>`
}
const Mine={
  template:`<div>我是mine</div>`
}

const routes=[
  {
    path:'/',
    component:Home
  },
  {
    path:'/home',
    name:'home',
    component:Home
  },
  {
    path:'/mine/:userId',
    name:'mine',
    component:Mine
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router
})