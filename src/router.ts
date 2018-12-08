import Vue from 'vue'
import Router from 'vue-router'

// 引入 Home 组件
const Home = (resolve: any) => {
  require.ensure(['./views/home/index.vue'], () => {
    resolve(require('./views/home/index.vue'))
  })
}

// 引入 About 组件
const About = (resolve: any) => {
  require.ensure(['./views/about/index.vue'], () => {
    resolve(require('./views/about/index.vue'))
  })
}

// 引入markdown组件
const Markdown = (resolve: any) => {
  require.ensure(['./views/markdown/index.vue'], () => {
    resolve(require('./views/markdown/index.vue'))
  })
}

const Gitsub = (resolve: any) => {
  require.ensure(['./views/gitsub/index.vue'], () => {
    resolve(require('./views/gitsub/index.vue'))
  })
}

const Grid = (resolve: any) => {
  require.ensure(['./views/grid/index.vue'], () => {
    resolve(require('./views/grid/index.vue'))
  })
}

const TreeItem = (resolve: any) => {
  require.ensure(['./views/treeview/index.vue'], () => {
    resolve(require('./views/treeview/index.vue'))
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
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid
    },
    {
      path: '/treeview',
      name: 'treeview',
      component: TreeItem
    }

  ]
})
