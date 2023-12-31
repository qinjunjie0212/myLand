import {Navigate} from "react-router-dom"
import HomePage from '../components/HomePage'
import Home from '../components/Home'
import MyNote from '../components/MyNote'
import Collect from '../components/Collect'
import Like from '../components/Like'
import Issue from '../components/Issue'
import Inform from '../components/Inform'
import Detail from '../components/Detail'
import Login from '../components/Login'
import Friend from '../components/Friend'

const routes = [
    {
        path:'/',
        element:<Navigate to="/login"></Navigate>
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Login></Login>
    },
    {
        path:'/friend',
        element:<Friend></Friend>
    },
    {
        path:'/home/*',
        element:<Home></Home>,
        // children:[
        //     {
        //         path:'',
        //         element:<Detail></Detail>,
        //     },
        //     {
        //         path:'detail',
        //         element:<Detail></Detail>
        //     }
        // ]
    },
    {
        path:'detail',
        element:<Detail></Detail>
    },
    {
        path:'/issue',
        element:<Issue></Issue>
    },
    {
        path:'/inform',
        element:<Inform></Inform>
    },
    {
        path:'/homepage',
        element:<HomePage></HomePage>,
        children:[
            {
                path:'',
                element:<MyNote></MyNote>
            },
            {
                path:'mynote',
                element:<MyNote></MyNote>
            },
            {
                path:'collect',
                element:<Collect></Collect>
            },
            {
                path:'like',
                element:<Like></Like>
            }
        ]
    }
]

export default routes