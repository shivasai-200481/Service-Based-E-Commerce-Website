import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import AddCart from './components/AddCart'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/></>
    },
    {
      path:"/mens",
      element: <><Navbar/><Mens/><Footer/></>
    },
    {
      path:"/womens",
      element: <><Navbar/><Womens/><Footer/></>
    },
    {
      path:"/kids",
      element: <><Navbar/><Kids/><Footer/></>
    },
    {
      path:"/login",
      element: <><Navbar/><Login/></>
    },
    {
      path:"/cart",
      element: <><Navbar/><Cart/></>
    },
    {
      path:"/products/:productId",
      element:<><Navbar/><AddCart/><Footer/></>

    }
    
  ])
  return (
    <>
    
    <RouterProvider router={router}/> 
    <Toaster />

    </>
  )
}

export default App
