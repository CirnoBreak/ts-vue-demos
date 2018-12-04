import Vue from 'vue'
import Router from 'vue-router'

// 引入 Home 组件
const Home = (resolve: any) => {
  require.ensure(['./views/Home.vue'], () => {
    resolve(require('./views/Home.vue'))
  })
}

// 引入 About 组件
const About = (resolve: any) => {
  require.ensure(['./views/About.vue'], () => {
    resolve(require('./views/About.vue'))
  })
}

const Markdown = (resolve: any) => {
  require.ensure(['./views/Markdown.vue'], () => {
    resolve(require('./views/Markdown.vue'))
  })
}

const Gitsub = (resolve: any) => {
  require.ensure(['./views/Gitsub.vue'], () => {
    resolve(require('./views/Gitsub.vue'))
  })
}

Vue.use(Router)

let base = `${process.env.BASE_URL}`

export default new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/markdown',
      name: 'markdown',
      component: Markdown
    },
    {
      path: '/gitsub',
      name: 'gitsub',
      component: Gitsub
    }

  ]
})
