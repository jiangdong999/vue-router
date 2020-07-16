const Foo = {
  template:`<div>
    <div>我是foo</div>
    <router-view></router-view>
  </div>`
}

const FooBar = {
  template:`<div>
    <div>我是bar</div>
  </div>`
}

const Login= {
  template:`<div>
    <div>我是login</div>
  </div>`
}

const routes = [
  {
    path:'/',
    component:Foo
  },
  {
    path:'/foo',
    component:Foo,
    children:[{
      path:'bar',
      component:FooBar,
      meta: { requiresAuth: true },
    }]
  },
  {
    path:'/login',
    component:Login
  }
]

const  router = new VueRouter({
  routes
})

const auth = {
  loggedIn(){
    return false;
  }
}

//遍历 $route.matched 来检查路由记录中的 meta 字段，带有requiresAuth参数 则直接跳转登录页
router.beforeEach((to,from,next)=>{
  console.log('router.beforeEach',to,from);
  if(to.matched.some(record=>record.meta.requiresAuth)){
    // console.log(record);
    // console.log(record.meta.requiresAuth);
    
    if(!auth.loggedIn()) {
      next({
        path:'/login',
        query:{ redirect: to.fullPath }
      })
    }else{
      next()
    }
  }else{
    next()//确保一定要调用 next()
  }
})

new Vue({
  el:'#app',
  router
})