import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Registration from "./Pages/Registration.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import Covoiturage from "./Pages/Covoiturage.jsx";

const Route=createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/Registration',
        element:<Registration/>

    },
    {
        path:'/Login',
        element:<LoginPage/>,
    },
    {
        path:'/Covoiturage',
        element:<Covoiturage/>,
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Route}/>
  </React.StrictMode>
)
