import React from 'react'
import { useNavigate } from 'react-router-dom'
const SignIn = () => {
  const navigate=useNavigate();
  function handleClick(){
    navigate('/');
  }
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center my-auto border-2  space-y-3'>
      <button onClick={handleClick} className='w-[200px] h-[50px] transition-all duration-200 hover:bg-[#d7e9fe] hover:text-[#0545af] rounded-xl'>Back To Home</button>
      <h1 className='text-3xl'>Room Sync</h1>
      <h2 className='text-4xl'>Welcome Back</h2>
      <p className='text-[#6c6f7e] text-xl'>
        Sign in to your account to continue
      </p>
      <div className=' flex flex-col px-6 py-3 space-y-2 border-2 shadow-xl w-[30%] h-[70%] rounded-xl'>
        <div className='mb-3'>
          <h1 className='text-2xl'>Sign In</h1>
          <p className='text-[#6c6f7e] text-xl'>Enter your credentials to access your account</p>
        </div>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Your@email.com' className='bg-green-400 h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md' />
        <label htmlFor="">Password</label>
        <input type="password" placeholder='••••••••' className='bg-green-400 h-[50px] px-3 rounded-xl bg-[#f6f7f9] shadow-md' />
        <div className='flex w-[100%] justify-between'>
          <div>
            <input type="checkbox" name="" id="" className='mt-3px' />
            <label htmlFor="" className='ml-[10px]'>Remember me</label>
          </div>
          <p className='text-[#70aefa] cursor-pointer transition-all duration-400 hover:underline decoration-[#70aefa] decoration-2 underline-offset-4'>Forgot Password?</p>
        </div>
        <button className='w-[100%] bg-[#70aefa] text-white h-[8%] rounded-xl shadow-md'>Sign In</button>
        <div className='w-[100%] flex justify-center items-center gap-2 mt-auto'>
          <p className='text-[#6c6f7e]'>Don't have an account?</p>
          <span className="text-blue-500 cursor-pointer">Sign Up Here</span>
        </div>
        <p className='text-center text-[#6c6f7e]'>Or continue with</p>
        <div className='flex gap-2 justify-around mt-6px h-[8%]'>
          <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#d7e9fe] h-[100%] rounded-xl shadow-2xl'>
            Google
          </button>
          <button className='w-[50%] bg-[#f6f7f9] transition-all duration-200 hover:bg-[#d7e9fe] h-[100%] rounded-xl shadow-2xl'>
            Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn