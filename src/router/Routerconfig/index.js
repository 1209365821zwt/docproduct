import React from 'react';
import Loadable from 'react-loadable';
function Loading(){
    return <div>
     {/* <img alt="图片"
         src="../../assets/image/loading.gif"
     /> */}
     loading.....
    </div>
}
const Home=Loadable({
   loader:()=>import('@/views/Home'),
   loading:Loading
})
const Firstpage=Loadable({
    loader:()=>import('@/views/Home/Firstpage'),
    loading:Loading
})
const Docheadmost=Loadable({
    loader:()=>import('@/views/Home/Docheadmost'),
    loading:Loading
})
const Clinic=Loadable({
    loader:()=>import('@/views/Home/Clinic'),
    loading:Loading
})
const Aboutus=Loadable({
    loader:()=>import('@/views/Home/Aboutus'),
    loading:Loading
})
const Login=Loadable({
    loader:()=>import('@/views/Login'),
    loading:Loading
})
const Mine=Loadable({
    loader:()=>import('@/views/Mine'),
    loading:Loading
})
const Register=Loadable({
    loader:()=>import('@/views/Register'),
    loading:Loading
})
const routes=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/Firstpage',
                component:Firstpage
            },
            {
                path:'/home/Docheadmost',
                component:Docheadmost
            },
            {
                path:'/home/Clinic',
                component:Clinic
            },
            {
                path:'/home/Aboutus',
                component:Aboutus
            },
            {
                path:'/home',
                redirect:'/home/Firstpage'
            }
        ]
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/Register',
        component:Register
    },
    {
       path:'/Mine',
       component:Mine
    },
    {
        path:'/',
        redirect:'/home'
    }
]
export default routes