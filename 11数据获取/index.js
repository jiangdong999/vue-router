function getPost(id,callback) {
  const err = null
  const post = {
    id:id,
    title:'vue router 获取数据',
    body:'哈哈哈哈  我是谁  成功'
  }
  setTimeout(() => {
    callback(err,post)
  },1000);
}

const Post = {
  template:`
  <div class="post">
    <div v-if="loading" class="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>`,
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}

const routes = [
  {
    path:'/post/:id',
    component:Post
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  el:'#app',
  router
})
