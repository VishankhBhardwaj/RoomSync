import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SignIn from './pages/Signin/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import Matches from './pages/Matches/Matches'
import Register from './pages/Register/Register'
import Chatbot from './Components/Chatbot/Chatbot'
import Success from './pages/Payment/Success'
import Cancelled from './pages/Payment/Cancelled'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/signin',
    element: <SignIn />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/matches',
    element: <Matches />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path:'/success',
    element:<Success/>
  },
  {
    path:'/cancel',
    element:<Cancelled/>
  }
]);
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      <Chatbot/>
    </>
  )
}

export default App
