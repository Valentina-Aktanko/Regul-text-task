import Vue from 'vue'
import VueRouter from 'vue-router'
import ReviewPage from '../views/ReviewPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'review-page',
    component: ReviewPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
