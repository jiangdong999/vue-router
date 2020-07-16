const Home = {
  template:`
  <div>
    <div>我是home</div>
    <ul>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
      <li>使用滚动路由  滚动到顶部  滚动的内容 <br> 使用滚动路由  滚动到顶部  滚动的内容</li>
    </ul>
    <router-link to="/about">about</router-link>
  </div>`
}
const About = {
  template:`<div>
      <div>这是about</div>
      <ul>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
      <li>我是about滚动的内容 <br> 我是about滚动的内容</li>
    </ul>
      <router-link to="/">home</router-link>
    </div>`
}

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/about',
    component:About
  }
]

const router = new VueRouter({
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   // return 期望滚动到哪个的位置
  //   console.log(to,from,savedPosition);
  //   // return {x:0,y:100}
  //   if(to.path == "/about"){
  //     return {x:0,y:60}
  //   }else{
  //     return scrollBehavior
  //   }
  // }
  scrollBehavior (to, from, savedPosition) {
    
    if(to.path == "/about"){
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 50 })
        }, 1000)
      })
    }else{
      return scrollBehavior
    } 
  }
})

new Vue({
  el:'#app',
  router
})