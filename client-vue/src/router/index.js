import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      isLogin:true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path:'/register',
    component:()=> import('../views/Register.vue')
  },
  {
    path:'/detail',
    name:'detail',
    component:()=>import('../views/Details.vue'),
    meta:{
      isLogin:true
    }
  },
  {
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isLogin){
    if(localStorage.getItem('token')){
      next()
      return
    }
    alert('没有登录,请登录')
    next('/login')
    return
  }

  next()
})
  




export default router
