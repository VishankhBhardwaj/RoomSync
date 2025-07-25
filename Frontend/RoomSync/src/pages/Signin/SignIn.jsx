import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Orb from '../../Components/Animations/Orb';
const SignIn = () => {
  const navigate = useNavigate();
  const [data, setUserData] = useState({});
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  function handleClick() {
    navigate('/');
  }
  function togglePassword() {
    setShowPassword(!showPassword)
  }
  async function handleSignIn() {
    try {
      const data = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"   // <-- Required header
        },
        body: JSON.stringify({ Email, Password })
      })
      const result = await data.json();
      if (result) {
        localStorage.setItem("token", result.token);
        toast.success("Login Successfull!");
        navigate('/dashboard');
      } else {
        toast.fail("Login Failed")
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  }
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center my-auto   space-y-3 animate__animated animate__fadeIn bg-black'>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <Orb hoverIntensity={1}
          rotateOnHover={true}
          hue={0}
          forceHoverState={true} 
          />
      </div>
      <div className='w-full h-screen flex flex-col justify-center items-center my-auto   space-y-3 animate__animated animate__fadeIn'>
        <button onClick={handleClick} className='w-[200px] h-[50px] transition-all duration-200 text-white hover:bg-[#500dc9] hover:text-white rounded-md'>Back To Home</button>
        <h1 className='text-3xl text-white'>Room Sync</h1>
        <h2 className='text-4xl text-white'>Welcome Back</h2>
        <p className='text-[#6c6f7e] text-xl'>
          Sign up to your account to continue
        </p>
        <div className=' flex flex-col lg:px-6 lg:py-3 lg:space-y-2 backdrop-blur-3xl border-2 shadow-2xl lg:w-[30%] lg:h-[80%] rounded-xl  w-[95%] h-[80%] px-4 py-3 gap-2 md:h-[60%] md:gap-1  bg-white/20'>
          <div className='mb-3'>
            <h1 className='text-2xl text-white'>Sign In</h1>
            <p className='text-[#6c6f7e] text-xl'>Enter your credentials to access your account</p>
          </div>
          <label htmlFor="" className='text-white'>Email</label>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Your@email.com'
            className=' h-[50px] md:h-[60px] px-3 rounded-md bg-[#f6f7f9] shadow-md outline-none' />
          <label htmlFor="" className='text-white'>Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='••••••••'
            className=' h-[50px] md:h-[60px] px-3 rounded-md bg-[#f6f7f9] shadow-md outline-none' />
          <span
            onClick={togglePassword}
            className="absolute right-[40px] top-[49.5%] transform -translate-y-1/2 cursor-pointer text-xl text-gray-500 transition-all duration-300"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
          <div className='flex w-[100%] justify-between'>
            <div>
              <input type="checkbox" name="" id="" className='mt-3px' />
              <label htmlFor="" className='ml-[10px] text-white'>Remember me</label>
            </div>
            <p className='text-[#70aefa] cursor-pointer transition-all duration-400 hover:underline decoration-[#70aefa] decoration-2 underline-offset-4'>Forgot Password?</p>
          </div>
          <button className='w-[100%] bg-[#500dc9]  text-white h-[8%] md:h-[15%] rounded-md shadow-md' onClick={handleSignIn}>Sign In</button>
          <ToastContainer />
          <div className='w-[100%] flex justify-center items-center gap-2 mt-auto'>
            <p className='text-[#6c6f7e]'>Don't have an account?</p>
            <Link className="text-blue-500 cursor-pointer hover:underline underline-offset-4" to='/register'>Sign Up Here</Link>
          </div>
          <p className='text-center text-[#6c6f7e]'>Or continue with</p>
          <div className='flex gap-2 justify-around mt-6px h-[9%]'>
            <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#500dc9] h-[110%] rounded-md shadow-2xl'>
              Google
            </button>
            <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#500dc9] h-[110%] rounded-md shadow-2xl'>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn