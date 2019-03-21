import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import CodeNews from './views/CodeNews.vue'
import Found from './views/Found.vue'
import Mine from './views/Mine.vue'
const Download = () => import('./views/common/DownloadApp.vue')
const About = () => import('./views/common/About.vue')
const Hple = () => import('./views/common/Hple.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/code-news',
      name: 'codeNews',
      component: CodeNews
    },
    {
      path: '/found',
      name: 'found',
      component: Found
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/download-app',
      name: 'downloadApp',
      component: Download
    },
    {
      path: '/hple',
      name: 'hple',
      component: Hple
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
