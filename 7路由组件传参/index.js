//第一种 默认使用$router传参 
const Home = {
  template:`<div>我是home页{{ $route.params.id }}</div>`
}

//第二种 使用props自定义传参 不在需要router传参
const Mine = {
  props: ['id','name'],
  template:`<div>我是mine页{{id}}{{name}}</div>`
}

const routes = [
  {
    path:'/',
    component:Home
  },
  {
    path:'/home/:id',//例子： /home/123    ---> 第一种  存在地址栏中
    component:Home,  
  },
  {
    path:'/mine/:id',
    component:Mine,
    props: true //第二种  使用props自定义传参  存在地址栏中 布尔类型  
  },
  {
    path:'/mine',
    component:Mine,
    props: { id: '333',name:'jiangdong' }   //第二种  使用props自定义传参  不存在地址栏中  对象类型   
  }, 
]

const router = new VueRouter({
  routes,
})

new Vue({
  el:'#app',
  router,
})