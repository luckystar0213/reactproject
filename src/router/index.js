import {
    Home,
    Find,
    Cart,
    Mine,
    Login,
    ProductList,
    Detail,
    SearchList
} from "../pages"

import EveryHot from "components/everyhot"
import CrossBorder from "components/crossborder"
import Women from "components/women"
import PersonInfo from "../components/personinfo"

export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页",
        children:[
            {
                path:"/home/everyhot",
                component:EveryHot,
                meta:{
                    flag:true
                }
            },
            {
                path:"/home/crossborder",
                component:CrossBorder,
                meta:{
                    flag:true
                }
            },
            {
                path:"/home/women",
                component:Women,
                meta:{
                    flag:true
                }
            }
        ]
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        icon:"\ue663",
        text:"发现"
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true,
            // requiredAuth:true
        },
        icon:"\ue737",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"我的"
    }
   
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/productlist",
        text:"",
        component:ProductList,
        meta:{} 
    },
    {
        path:"/detail",
        component:Detail,
        meta:{} 
<<<<<<< HEAD
    }, {
        path:"/personinfo/:name",
        component:PersonInfo,
        meta:{
            // flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"个人中心"
    }
=======
    },
    {
        path:"/searchlist",
        component:SearchList,
        meta:{} 
    },
>>>>>>> aloye
  
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)