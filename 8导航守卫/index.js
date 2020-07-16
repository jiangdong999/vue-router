const Home = {
  template:`
    <div>
      <div>我是首页</div>
      <router-link to="/mine">跳转mine</router-link>
    </div>
  `,
  beforeRouteEnter(to,from,next){                //第一 进入组件时加载
    console.log('beforeRouteEnter',to,from);
    next()
  },
  beforeRouteUpdate(to,from,next){
    console.log('beforeRouteUpdate',to,from);
  },
  beforeRouteLeave(to,from,next){                 //第四  离开组件时加载
    console.log('beforeRouteLeave',to,from);
    next()
  }
}

const Mine = {
  template:`
  <div>
    <div>我是mine</div>
    <router-link to="/">home</router-link>
  </div>
  `
}

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/mine',
    component:Mine,
    beforeEnter:(to,from,next)=>{      //第五   进入路由独享的守卫
      console.log('beforeEnter',to,from);
      next();
    }
  }
]

const router = new VueRouter({
  routes
})
//beforeEach 和 beforeResolve 是一样的
//路由的全局前置守卫  to即将要进入的目标  from即将要离开的目标
// router.beforeEach((to,from,next)=>{
//   console.log("router.beforeEach",to,from);
//   next()
// })
router.beforeResolve((to,from,next)=>{   //第二   成功进入全局前置路由     //第六 然后进入
  console.log("router.beforeResolve",to,from);
  next()
})
//路由的全局后置守卫
router.afterEach((to,from)=>{             //第三  成功进入全局后置路由    //第七 然后进入
  console.log("router.afterEach",to,from);
})

new Vue({
  el:'#app',
  router,
})


//先是加载组件  ==>  然后进入全局路由 ==> 离开组件  ==>  路由独享的钩子   