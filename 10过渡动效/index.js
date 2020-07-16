const Home = {
  template: `<div>
    <div>我是home</div>
    <router-link to="/mine">mine</router-link>
  </div>`
}
const Mine = {
  template:`<div>
  <div>我是mine</div>
  <router-link to="home">home</router-link>
  </div>`
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
    path:'/mine',
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