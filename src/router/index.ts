import Vue from 'vue'
import VueRouter from 'vue-router';
import PageBlock from '../components/PageBlock.vue'

Vue.use(VueRouter)

const routes =  [
  {
    path: '/:id/:page',
    name: 'Page',
    component: PageBlock
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router;