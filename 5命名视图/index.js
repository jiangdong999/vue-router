const Home={
  template:`<div>我是home</div>`
}

const Mine={
  template:`<div>我是mine</div>`
}

const routes = [
  {
    path:'/',
    components:{
      default:Mine,
      aName:Home,
      bName:Mine,
    }
  },
  {
    path:'/home',
    components: {
      default: Mine,//默认
      aName:Home//aName 是路由的名字
    }
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router,
})