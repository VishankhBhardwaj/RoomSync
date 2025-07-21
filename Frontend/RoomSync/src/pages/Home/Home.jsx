import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import BlurText from "../../Components/Animations/BlurText";
import { toast, ToastContainer } from 'react-toastify';
import DarkVeil from '../../Components/Animations/DarkVeil';
import { GiBrain } from "react-icons/gi";
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { IoIosLogIn } from "react-icons/io";
import { IoIosChatboxes } from "react-icons/io";
import { TbLockStar } from "react-icons/tb";
import TextType from '../../Components/Animations/TextType';
import SpotlightCard from '../../Components/Animations/SpotlightCard';
import TargetCursor from '../../Components/Animations/TargetCursor';
import MetaBalls from '../../Components/Animations/MetaBalls';
import Dock from '../../Components/Animations/Dock';

const Home = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const token = localStorage.getItem('token');

    const items = [
        { icon: <VscHome size={18} />, label: 'Home', onClick: () => navigate('/') },
        { icon: <IoIosLogIn  size={18} />, label: 'Login', onClick: () => navigate('/signin') },
        { icon: <VscAccount size={18} />, label: 'Profile', onClick: () => navigate('/dashboard') },
        { icon: <VscSettingsGear size={18} />, label: 'Settings', onClick: () => alert('Settings!') },
    ];

    useEffect(() => {
        if (token) {
            setLoggedIn(true);
        }
    }, [token]);

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    const handleClick = () => {
        if (token) {
            setLoggedIn(true);
            navigate('/dashboard');
        } else {
            toast.success("Please Login/Register first");
            navigate('/signin');
        }
    };

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <DarkVeil />
            </div>
            <div className="relative z-10 bg-transparent  animate__animated animate__fadeInDown">
                <TargetCursor
                    spinDuration={2}
                    hideDefaultCursor={true}
                />
                <nav className='flex flex-col sm:flex-row justify-between items-center bg-opacity-15 backdrop-blur-lg bg-transparent w-full px-4 sm:px-6 py-4 shadow-md sticky top-0 z-20'>
                    <Link className='font-bold text-2xl sm:text-3xl text-[#4f4864]' to="/">RoomSync</Link>
                    <div className='flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0'>
                        {(loggedIn ? (
                            <Link
                                to="/"
                                onClick={() => { localStorage.removeItem('token'); setLoggedIn(false); }}
                                className="relative text-[#4f4864] text-md py-2 px-4 hover:text-[#61a6fa] transition-colors duration-200 group bg-transparent"
                            >
                                Log Out
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#61a6fa] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ) : (
                            <Link
                                to="/signin"
                                className="relative text-[#4f4864] text-md py-2 px-4 hover:text-[#61a6fa] transition-colors duration-200 group bg-transparent"
                            >
                                Sign In
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#61a6fa] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                        <button className="w-full sm:w-[120px] h-10 bg-[#61a6fa] text-white rounded-md font-sans">
                            Get Started
                        </button>
                    </div>
                </nav>

                {/* Hero Section */}
                <div className='flex flex-col items-center text-center px-4 bg-transparent'>
                    <div className=' w-full flex flex-col justify-center items-center md:flex-row'>
                        <div className='md:w-[70%] justify-center items-center'>
                            <BlurText
                                text="Find Your Perfect"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-10 font-bold mb-8 bg-transparent text-white"
                            />
                            <BlurText
                                text="Roomate"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                onAnimationComplete={handleAnimationComplete}
                                className="text-[#61a6fa] text-3xl sm:text-5xl md:text-6xl lg:text-7xl mt-2 "
                            />
                            <TextType
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor={true}
                                cursorCharacter="|"
                                className='text-[#61a6fa] text-md sm:text-xl mt-4 leading-relaxed bg-transparent mr-auto'
                                text={[
                                    'AI-powered matching connects you with compatible roommates based on lifestyle, preferences, and personality traits.',
                                    'Join thousands who found their ideal living situation.'
                                ]}
                            />
                        </div>
                        <div className=' md:w-[30%]'>
                            <MetaBalls
                                color="#ffffff"
                                cursorBallColor="#ffffff"
                                cursorBallSize={2}
                                ballCount={15}
                                animationSize={20}
                                enableMouseInteraction={true}
                                enableTransparency={true}
                                hoverSmoothness={0.05}
                                clumpFactor={1}
                                speed={0.3}
                                className="w-full h-full"
                            />
                        </div>
                    </div>


                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row mt-8 w-full sm:w-[60%] bg-transparent space-y-4 sm:space-y-0 sm:space-x-6'>
                        <button
                            className='bg-white text-black font-semibold w-full sm:w-[50%] h-12 rounded-full shadow-md transition-all duration-200 hover:scale-105'
                            onClick={handleClick}>
                            Get Started
                        </button>
                        <ToastContainer />
                        <button
                            className='backdrop-blur-xl bg-white/10 text-white font-semibold w-full sm:w-[50%] h-12 rounded-full border border-white/30 transition-all duration-200 hover:scale-105'>
                            Learn More
                        </button>
                    </div>

                    {/* Feature Cards */}
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-10 px-4 bg-transparent'>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className='p-2 items-center justify-center flex'>
                                <span className='text-[50px] '><GiBrain className='text-white' /></span>
                            </div>
                            <h3 className='text-xl sm:text-2xl font-semibold  '>AI-POWERED MATCHING</h3>
                            <p className='text-[#747a82] text-base sm:text-xl leading-relaxed '>
                                Advanced algorithms analyze personality traits, lifestyle preferences, and compatibility factors.
                            </p>
                        </SpotlightCard>
                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className='p-2 items-center justify-center flex'>
                                <span className='text-[50px] '><IoIosChatboxes className='text-white' /></span>
                            </div>
                            <h3 className='text-xl sm:text-2xl font-semibold '>Smart Chat System</h3>
                            <p className='text-[#747a82] text-base sm:text-xl leading-relaxed '>
                                Connect with potential roommates through our secure messaging platform with real-time chat.
                            </p>
                        </SpotlightCard>

                        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                            <div className='p-2 items-center justify-center flex'>
                                <span className='text-[50px] '><TbLockStar className='text-white' /></span>
                            </div>
                            <h3 className='text-xl sm:text-2xl font-semibold '>Safe & Verified</h3>
                            <p className='text-[#747a82] text-base sm:text-xl leading-relaxed '>
                                All users are verified for safety. Background checks and identity verification available.
                            </p>
                        </SpotlightCard>
                    </div>
                    <div className='w-full flex flex-col sm:flex-row justify-around items-center gap-8 mt-10 px-4 h-[200px] bg-transparent'>
                        <div className='text-center bg-transparent'>
                            <h2 className='text-3xl sm:text-4xl font-bold text-blue-400 bg-transparent'>
                                <CountUp end={15000} duration={2} separator="," suffix="+" className='bg-transparent' />
                            </h2>
                            <p className='text-gray-500 bg-transparent'>Active Users</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold text-blue-400 bg-transparent'>
                                <CountUp end={95} duration={2} suffix="%" className='bg-transparent' />
                            </h2>
                            <p className='text-gray-500 bg-transparent'>Match Success</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold text-blue-400 bg-transparent'>
                                <CountUp end={500} duration={2} suffix="+" className='bg-transparent' />
                            </h2>
                            <p className='text-gray-500 bg-transparent'>Cities</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='text-3xl sm:text-4xl font-bold text-blue-400 bg-transparent'>
                                <CountUp end={24} duration={2} suffix="/7" className='bg-transparent' />
                            </h2>
                            <p className='text-gray-500 bg-transparent'>Support</p>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 w-full z-50 hidden md:block">
                        <Dock
                            items={items}
                            panelHeight={68}
                            baseItemSize={50}
                            magnification={70}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
