import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
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
        localStorage.setItem("token",result.token);
        toast.success("Login Successfull!");
        navigate('/dashboard');
      }else{
        toast.fail("Login Failed")
      }
    } catch (error) {
      console.log("Error occurred", error);
    }
  }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center my-auto border-2  space-y-3 animate__animated animate__backInLeft'>
      <button onClick={handleClick} className='w-[200px] h-[50px] transition-all duration-200 hover:bg-[#d7e9fe] hover:text-[#0545af] rounded-xl'>Back To Home</button>
      <h1 className='text-3xl'>Room Sync</h1>
      <h2 className='text-4xl'>Welcome Back</h2>
      <p className='text-[#6c6f7e] text-xl'>
        Sign up to your account to continue
      </p>
      <div className=' flex flex-col lg:px-6 lg:py-3 lg:space-y-2 border-2 shadow-2xl lg:w-[30%] lg:h-[70%] rounded-xl  w-[95%] h-[80%] px-4 py-3 gap-2 md:h-[60%] md:gap-1'>
        <div className='mb-3'>
          <h1 className='text-2xl'>Sign In</h1>
          <p className='text-[#6c6f7e] text-xl'>Enter your credentials to access your account</p>
        </div>
        <label htmlFor="">Email</label>
        <input
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder='Your@email.com'
          className=' h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md' />
        <label htmlFor="">Password</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='••••••••'
          className=' h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md' />
        <span
          onClick={togglePassword}
          className="absolute right-[590px] top-[61%] transform -translate-y-1/2 cursor-pointer text-xl text-gray-500"
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <div className='flex w-[100%] justify-between'>
          <div>
            <input type="checkbox" name="" id="" className='mt-3px' />
            <label htmlFor="" className='ml-[10px]'>Remember me</label>
          </div>
          <p className='text-[#70aefa] cursor-pointer transition-all duration-400 hover:underline decoration-[#70aefa] decoration-2 underline-offset-4'>Forgot Password?</p>
        </div>
        <button className='w-[100%] bg-[#70aefa] hover:bg-[#7eb4f6] text-white h-[8%] rounded-xl shadow-md' onClick={handleSignIn}>Sign In</button>
        <ToastContainer />
        <div className='w-[100%] flex justify-center items-center gap-2 mt-auto'>
          <p className='text-[#6c6f7e]'>Don't have an account?</p>
          <Link className="text-blue-500 cursor-pointer hover:underline underline-offset-4" to='/register'>Sign Up Here</Link>
        </div>
        <p className='text-center text-[#6c6f7e]'>Or continue with</p>
        <div className='flex gap-2 justify-around mt-6px h-[9%]'>
          <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#d7e9fe] h-[110%] rounded-xl shadow-2xl'>
            Google
          </button>
          <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#d7e9fe] h-[110%] rounded-xl shadow-2xl'>
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn