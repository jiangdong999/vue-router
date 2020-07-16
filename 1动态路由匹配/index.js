const User = {
  template: `<div>
    <div>我是user</div>
    <div>name:{{ $route.params.name }} id:{{ $route.params.id }}</div>
  </div>`
}
const router = new VueRouter({
  routes: [
    {
      path: '/user/:name/:id',
      component: User
    }
  ]
})

new Vue({
  el: "#app",
  router,
})