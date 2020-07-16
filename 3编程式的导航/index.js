const Home = {
  template:`<div><div>我是home</div><button @click="settingClick">跳到setting</button></div>`,
  methods:{
    settingClick(){
      // 字符串形式
      router.push('/setting')
      // router.replace('/setting')//不保留history记录   注意：重新打开页面效果更加
      // router.go(1)//在history历史记录中 前进 后退 方可生效
    }
  }
}

const Category = {
  template:`<div><div>我是Category</div><button @click="homeClick">跳到home</button></div>`,
  methods:{
    homeClick(){
      //对象形式
      router.push({
        path:'/home'
      })
      // router.replace('/home') //不保留history记录  注意：重新打开页面效果更加
    }
  }
}

const Shopcart = {
  template:`<div><div>我是Shopcart</div><button @click="categoryClick">跳到category</button></div>`,
  methods:{
    categoryClick(){
      // 命名的路由  不用写path路径  必须给路由一个name属性 才会生效
      // 如果写了 path属性，params 会不起作用
      router.push({ 
        name: 'category', 
        query: { userId: '111' }
      })
    }
  }
}

const Setting = {
  template:`<div><div>我是Setting</div><button @click="shopcartClick">跳到shopcart</button></div>`,
  methods:{
    shopcartClick(){
      // 带查询参数，变成 /shopcart?userid=123
      router.push({ 
        path: 'shopcart', 
        query: { userid: '123' }
      })
    }
  }
}

const routes = [

  {
    path:'/',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    name:'category',//命名路由
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/setting',
    component:Setting
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router
})