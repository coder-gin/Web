// 配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')

// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
  {
    path: '',
    redirect: '/home' // 重定向，打开网页时直接显示首页内容
  }
  ,
  {
    path: '/home',
    component: Home,
    children: [
      // {
      //   path: '',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
]

const router = new VueRouter({
  // 配置路由与组件之间的关系
  routes,
  mode: 'history', // 默认为hash，路径显示有#号，不好看
  linkActiveClass: 'active'
})

// 前置守卫（guard）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

// 后置钩子（hook）
router.afterEach((to, from) => {
  // console.log('hello hook')
})

export default router