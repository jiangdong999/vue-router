const User = {
  template:`
    <div>
        User {{ $route.params.id }}
        <router-view></router-view>
    </div>
  `
}
const UserPorfile = {
  template:`
    <div>This is profile {{ $route.params.id }}</div>
  `
}

const UserPosts = {
  template:`
    <div>This is posts {{ $route.params.id }}</div>
  `
}

const routes = [
  {
    path:'/user/:id',
    component:User,
    children:[
      {
        path:'profile',
        component:UserPorfile,
      },
      {
        path:'posts',
        component:UserPosts,
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router,
})