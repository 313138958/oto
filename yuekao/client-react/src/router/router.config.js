
import Login from '../view/Login'
import Register from '../view/Register'
import Home from '../view/Home'
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
        form:'/',
        to:'/login'
    }
]

export default routerConfig