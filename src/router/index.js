import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import("@/pages/home/Home")
const Classify = () => import("@/pages/classify/Classify")
const ShopCart = () => import("@/pages/shopCart/ShopCart")
const Profile = () => import("@/pages/profile/Profile")

const routes = [
    {
      path: '',
      redirect:"home"
    },
    {
      path:"/home",
      component:Home
    },
    {
      path:"/classify",
      component:Classify
    },
    {
      path:"/shopCart",
      component:ShopCart
    },
    {
      path:"/profile",
      component:Profile
    }
  ]
const router = new Router({
  routes,
  mode:"history"
})
export default router
