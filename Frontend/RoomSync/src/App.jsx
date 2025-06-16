import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SignIn from './pages/Signin/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/signin',
    element:<SignIn/>
  },{
    path:'/dashboard',
    element:<Dashboard/>
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
