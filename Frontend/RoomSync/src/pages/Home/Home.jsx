import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CountUp from 'react-countup';
import BlurText from "../../Components/Animations/BlurText";
import { toast, ToastContainer } from 'react-toastify';
const Home = () => {
    const navigate = useNavigate();
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    const handleClick = () => {
        const token=localStorage.token;
        if(token){
            navigate('/dashboard');
        }else{
            toast.success("Please Login/Register first");
            navigate('/signin');
        }
        
    };

    return (
        <div className='w-full min-h-screen bg-white animate__animated animate__bounceInDown'>
            {/* Navbar */}
            <nav className='flex flex-col sm:flex-row justify-between items-center bg-[#f0f3f9] w-full px-4 sm:px-6 py-4 shadow-md sticky top-0'>
                <Link className='font-bold text-2xl sm:text-3xl text-[#4f4864]' to="/">RoomSync</Link>
                <div className='flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0'>
                    <Link to="/signin" className="relative text-[#4f4864] text-md py-2 px-4 hover:text-[#61a6fa] transition-colors duration-200 group">
                        Sign In
                        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#61a6fa] transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <button className="w-full sm:w-[120px] h-10 bg-[#61a6fa] text-white rounded-md font-sans">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <div className='flex flex-col items-center text-center px-4'>
                {/* <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-10 font-bold'>Find Your Perfect</h1> */}
                <BlurText
                    text="Find Your Perfect"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-10 font-boldl mb-8 "
                />
                {/* <span className='text-[#61a6fa] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2'>Roommate</span> */}
                <BlurText
                    text="Roomate"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-[#61a6fa] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2"
                />
                <p className='text-[#747a82] text-md sm:text-xl mt-4 leading-relaxed'>
                    AI-powered matching connects you with compatible roommates based on <br className='hidden sm:block' />
                    lifestyle, preferences, and personality traits. Join thousands who found their <br className='hidden sm:block' />
                    ideal living situation.
                </p>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row mt-8 w-full sm:w-[60%] space-y-4 sm:space-y-0 sm:space-x-6'>
                    <button
                        className='bg-[#61a6fa] w-full sm:w-[70%] rounded-md h-12 transition-all duration-200 hover:scale-105 text-white font-bold'
                        onClick={handleClick}>
                        🚀 Start Matching Now
                    </button>
                    <ToastContainer />
                    <button className='w-full sm:w-[80%] rounded-md bg-[#d7e9fe] transition-all duration-200 hover:scale-105 text-black font-bold h-12'>
                        📝 Take Personality Quiz
                    </button>
                </div>

                {/* Cards */}
                <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-10 px-4'>
                    <div className="flex flex-col px-4 py-6 w-full max-w-md border-2 bg-white rounded-xl transition-all duration-200 space-y-3 hover:scale-105">
                        <span className='text-[50px] bg-white'>🧠</span>
                        <h3 className='text-xl sm:text-2xl font-semibold bg-white'>AI-POWERED MATCHING</h3>
                        <p className='text-[#747a82] text-base sm:text-xl leading-relaxed bg-white'>
                            Advanced algorithms analyze personality traits, lifestyle preferences, and compatibility factors.
                        </p>
                    </div>
                    <div className="flex flex-col px-4 py-6 w-full max-w-md border-2 bg-white rounded-xl transition-all duration-200 space-y-3 hover:scale-105">
                        <span className='text-[50px] bg-white'>💬</span>
                        <h3 className='text-xl sm:text-2xl font-semibold bg-white'>Smart Chat System</h3>
                        <p className='text-[#747a82] text-base sm:text-xl leading-relaxed bg-white'>
                            Connect with potential roommates through our secure messaging platform with real-time chat.
                        </p>
                    </div>
                    <div className="flex flex-col px-4 py-6 w-full max-w-md border-2 bg-white rounded-xl transition-all duration-200 space-y-3 hover:scale-105">
                        <span className='text-[50px] bg-white'>🔒</span>
                        <h3 className='text-xl sm:text-2xl font-semibold bg-white'>Safe & Verified</h3>
                        <p className='text-[#747a82] text-base sm:text-xl leading-relaxed bg-white'>
                            All users are verified for safety. Background checks and identity verification available.
                        </p>
                    </div>
                </div>

                {/* Stats Section */}
                <div className='w-full flex flex-col sm:flex-row justify-around items-center gap-8 mt-10 px-4 h-[200px]'>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-blue-400'>
                            <CountUp end={15000} duration={2} separator="," suffix="+" />
                        </h2>
                        <p className='text-gray-500'>Active Users</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-blue-400'>
                            <CountUp end={95} duration={2} suffix="%" />
                        </h2>
                        <p className='text-gray-500'>Match Success</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-blue-400'>
                            <CountUp end={500} duration={2} suffix="+" />
                        </h2>
                        <p className='text-gray-500'>Cities</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-3xl sm:text-4xl font-bold text-blue-400'>
                            <CountUp end={24} duration={2} suffix="/7" />
                        </h2>
                        <p className='text-gray-500'>Support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
