import {
    Home,
    Find,
    Cart,
    Mine,
    Login,
    ProductList,
    Detail
} from "../pages"



export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页"
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
            flag:true
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
        text:"不一样的优雅",
        component:ProductList,
        meta:{} 
    },
    {
        path:"/detail/:glsCode/:productName",
        component:Detail,
        meta:{} 
    },
  
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)