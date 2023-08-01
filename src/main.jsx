import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import List from './pages/List.jsx'
import Login from './pages/Login.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/menu",
    element: <Menu />,
    // errorElement: <NotFoundPage />,
  },
  {
    path: "/list",
    element: <List />
  },
  {
    path: "/login",
    element: <Login />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
