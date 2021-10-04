import Vue from 'vue'
import VueRouter from 'vue-router';
import PageBlock from '../pages/PageBlock.vue'
import PageDefault from '../pages/PageDefault.vue'

Vue.use(VueRouter)

const routes =  [
  {
    path: '/',
    name: 'Default',
    component: PageDefault
  },
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