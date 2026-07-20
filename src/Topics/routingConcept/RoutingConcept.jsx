import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const RoutingConcept = () => {
    const routes = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"login",
            element:<Login/>
        }
    ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default RoutingConcept