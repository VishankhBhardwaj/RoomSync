import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SignIn from './pages/Signin/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import Register from './pages/Register/Register'
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="overflow-auto h-screen">
        <Home />
      </div>
    )
  },
  {
    path: '/signin',
    element: (
      <div className="overflow-hidden h-screen">
        <SignIn />
      </div>
    )
  },
  {
    path: '/dashboard',
    element: (
      <div className="overflow-hidden h-screen">
        <Dashboard />
      </div>
    )
  },
  {
    path: '/register',
    element: (
      <div className="overflow-hidden h-screen">
        <Register />
      </div>
    )
  }
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
