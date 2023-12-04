import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './view/Home/Home';
import Services from './view/Services/Services';
import Pricing from './view/Pricing/Pricing';
import Security from './view/Security/Security';
import JobHere from './view/JobHere/JobHere';
import AboutUs from './view/AboutUs/AboutUs';
import Login from './view/Login/Login';
import SignUp from './view/SingUp/SignUp';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/services',
        element:<Services/>
    },
    {
        path:'pricing',
        element:<Pricing/>
    },
    {
        path:'/Security',
        element:<Security/>
    },
    {
        path:'/jobhere',
        element:<JobHere/>
    },
    {
        path:'/aboutus',
        element:<AboutUs/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/singup',
        element:<SignUp/>
    },
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<RouterProvider router={router}/>
  
);


