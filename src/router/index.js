import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Search from '../pages/Search/Search'
import Login from '../pages/Login/Login'
import Shop from '../pages/Shop/Shop'
import ShopDoods from '../pages/Shop/ShopDoods/ShopDoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: "/msite",
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/order",
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/profile",
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/search",
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/",
            component: Msite,
            meta: {
                showFooter: true
            }
        },
        {
            path: "/login",
            component: Login,
            meta: {
                showFooter: false
            }
        },
        {
            path:"/shop",
            component:Shop,
            meta: {
                showFooter: false
            },
            children:[
                {
                    path:'/shop/goods',
                    component:ShopDoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },{
                    path:'',
                    redirect:'/shop/goods'
                }
            ]
        }
    ]
})