import Vue from 'vue'
import Router from 'vue-router'

// 主路由懒加载
const MainRoutes = (name: string) => () => import(`./views/${name}/index.vue`)
// 引入 Home 组件
const Home = MainRoutes('home')
// 引入 About 组件
const About = MainRoutes('about')
// 引入 markdown 组件
const Markdown = MainRoutes('markdown')
// 引入 gitsub 组件
const Gitsub = MainRoutes('gitsub')
// 引入 grid 组件
const Grid = MainRoutes('grid')
// 引入 treeview 组件
const TreeItem = MainRoutes('treeview')
// 引入 svgchart 组件
const SvgChart = MainRoutes('svgchart')
// 引入 modal 组件
const Modal = MainRoutes('modal')
// 引入 deepstream 组件
const DeepStream = MainRoutes('deepstreamhub')

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
    },
    {
      path: '/svgchart',
      name: 'svgchart',
      component: SvgChart
    },
    {
      path: '/modal',
      name: 'modal',
      component: Modal
    },
    {
      path: '/deepstreamhub',
      name: 'deepstreamhub',
      component: DeepStream
    }

  ]
})
