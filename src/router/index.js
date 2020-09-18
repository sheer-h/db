import Vue from 'vue'
import vueRouter from 'vue-router'
import home from '@/components/home'
import mine from '@/components/mine'
import explore from '@/components/explore'
import gallery from '@/components/gallery'
import error from '@/components/error'

Vue.use(vueRouter)

var router = new vueRouter({ 
    // mode:"hash"     #不使用hash匹配路由，不用跟路由配合
    //history，页面会跳转，所以要跟后台配合使用<router-link>
    mode:"history",
    routes:[{
        path:"/",
        name:"home",
        component:home
    },{
        path:"/mine",
        name:"mine",
        component:mine
    },{
        path:"/explore",
        name:"explore",
        component:explore
    },{
        path:"/gallery",
        name:"gallery",
        component:gallery
    },{
        path:"*",
        component:error
    }]
})



export default router