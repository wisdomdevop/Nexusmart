import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Register from "./authen/Register";
import Layout from "./routes/Layout";
import Login from "./authen/Login";
import Navbar from "./components/Navbar";
import Profile from "./authen/Profile";
import ProductPage from "./pages/ProductPage";
import Hero from "./pages/Hero";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Petails from "./pages/Petails";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children: [
        {
        path:'/',
        element:<App/>
        },
        {
            path:'/register',
            element:<Register/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/product',
            element:<ProductPage/>
        },
        {path:'/product/:slug', 
            element:<Detail/>
        },
        {path:'/cart',
            element:<Cart/>
        },
        {
            path:'/cart/:pay',
            element:<Petails/>
        },
        {
            path:'/user/profile',
            element: <Profile/>
        }

     
        ]
    },

    {
        path:'/code',
        element:<Profile/>
    }
        
])