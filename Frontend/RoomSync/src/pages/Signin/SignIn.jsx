import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import 'animate.css';
import LiquidEther from '../../Components/Animations/LiquidEther';
import roommateImg from '../../assets/roommate_illustration.png';

const SignIn = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  async function handleSignIn() {
    try {
      const data = await fetch('http://localhost:3000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ Email, Password })
      });
      const result = await data.json();
      if (result) {
        localStorage.setItem("token", result.token);
        toast.success("Login Successful!");
        setTimeout(() => navigate('/dashboard'), 1500);
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error("Error occurred", error);
    }
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center px-4 bg-black py-8 md:py-0 animate__animated animate__fadeIn'>
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-black">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
          color0="#5227FF"
          color1="#FF9FFC"
          color2="#B19EEF"
        />
      </div>

      <div className='relative z-10 w-full min-h-screen flex flex-col md:flex-row md:justify-between justify-center items-center md:px-12 gap-8 animate__animated animate__fadeIn'>

        {/* Left branding panel */}
        <div className='md:w-1/2 flex justify-center'>
          <div className='flex flex-col items-center'>
            <button
              onClick={() => navigate('/')}
              className='w-[200px] text-white h-[50px] transition-all duration-200 hover:bg-[#500dc9] rounded-md mb-4'
            >
              Back To Home
            </button>
            <h1 className='text-3xl text-white'>Room Sync</h1>
            <h2 className='text-4xl text-white'>Welcome Back</h2>
            <p className='text-[#6c6f7e] text-xl text-center'>Sign in to continue finding your perfect roommate</p>
            <img
              src={roommateImg}
              alt='Find your perfect roommate'
              className='mt-6 w-[420px] md:w-[480px] object-contain drop-shadow-2xl animate__animated animate__fadeInUp'
            />
          </div>
        </div>

        {/* Right form panel */}
        <div className='md:w-1/2 flex flex-col px-6 py-6 space-y-4 border-2 shadow-xl w-full rounded-xl backdrop-blur-xl bg-white/20'>
          <div className='mb-3'>
            <h1 className='text-2xl text-white'>Sign In</h1>
            <p className='text-[#6c6f7e] text-xl'>Enter your credentials to access your account</p>
          </div>

          <label className='text-white'>Email</label>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder='Your@email.com'
            className='h-[50px] px-3 rounded-md bg-[#f6f7f9] shadow-md outline-none'
          />

          <label className='text-white'>Password</label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
              className='h-[50px] w-full px-3 pr-12 rounded-md bg-[#f6f7f9] shadow-md outline-none'
            />
            <span
              onClick={togglePassword}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl text-gray-500 transition-all duration-300"
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
          </div>

          <div className='flex w-full justify-between items-center'>
            <div className='flex items-center gap-2'>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe" className='text-white'>Remember me</label>
            </div>
            <p className='text-[#70aefa] cursor-pointer transition-all duration-300 hover:underline decoration-[#70aefa] decoration-2 underline-offset-4'>
              Forgot Password?
            </p>
          </div>

          <button
            className='w-full bg-[#500dc9] text-white h-12 rounded-md shadow-md'
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <ToastContainer />

          <div className='w-full flex justify-center items-center gap-2'>
            <p className='text-[#6c6f7e]'>Don't have an account?</p>
            <Link className="text-blue-500 cursor-pointer hover:underline underline-offset-4" to='/register'>Sign Up Here</Link>
          </div>

          <p className='text-center text-white'>Or continue with</p>
          <div className='flex flex-col md:flex-row gap-4'>
            <button className='w-full bg-[#f6f7f9] hover:bg-[#500dc9] h-10 rounded-md shadow-2xl transition-all duration-200'>Google</button>
            <button className='w-full bg-[#f6f7f9] hover:bg-[#500dc9] h-10 rounded-md shadow-2xl transition-all duration-200'>Facebook</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SignIn