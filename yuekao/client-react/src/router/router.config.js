
import Login from '../view/Login'
import Register from '../view/Register'
import Home from '../view/Home'
import Add from '../view/Add'
const routerConfig = [
    {
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/add',
        component:Add
    },
    {
        form:'/',
        to:'/login'
    }
]

export default routerConfig