import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SignIn from './pages/Signin/SignIn'
import Dashboard from './pages/Dashboard/Dashboard'
import Matches from './pages/Matches/Matches'
import Register from './pages/Register/Register'

import Success from './pages/Payment/Success'
import Cancelled from './pages/Payment/Cancelled'
import UserProfile from './pages/Matches/userProfile'
function App() {
  const token = localStorage.getItem("token");
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
      element: token ? <Dashboard /> : <Navigate to='/signin' />
    },
    {
      path: '/matches',
      element: token ? <Matches /> : <Navigate to='/signin' />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/success',
      element: token ? <Success /> : <Navigate to='/signin' />
    },
    {
      path: '/cancel',
      element: token ? <Cancelled /> : <Navigate to='/signin' />
    },
    {
      path: '/userProfile',
      element: <UserProfile />
    }
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
