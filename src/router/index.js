import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import treeTypesView from '../views/treeTypesView.vue'
import technicsView from '../views/technicsView.vue'
import benefitsView from '../views/benefitsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/treetype',
    name: 'treeType',
    component: treeTypesView
  },
  {
    path: '/technics',
    name: 'technics',
    component: technicsView
  },
  {
    path: '/benefits',
    name: 'benefits',
    component: benefitsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
