import { createRouter, createWebHashHistory } from "vue-router"
import Page from './components/Page.vue'
import Form from './components/Form.vue'
import {auth} from './firebase/index'

const routes = [
    {
        name:`Page`,
        path:'/',
        component:Page,
        meta:{
            requiresAuth:true
        }
    },
    {
        name:`Form`,
        path:'/login',
        component:Form,
        meta:{
            requiresAuth:true
        }
    }
]


const router = createRouter({
    history:createWebHashHistory(process.env.BASE_URL),
    routes
})


router.beforeEach((to, from, next) => {
    if (to.path === '/login' && auth.currentUser) {
      next('/')
      return;
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login')
      return;
    }
  
    next();
  })

export default router;