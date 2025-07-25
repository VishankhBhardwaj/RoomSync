import { React, useState, useEffect } from 'react';
import { FaHome, FaChartBar, FaHeart, FaComments, FaUser, FaCog, FaFileAlt } from 'react-icons/fa';
import CountUp from 'react-countup'; // Make sure this is installed
import Home from '../Home/Home';
import RoomMateHub from '../RoomMateHub/RoomMateHub';
import Matches from '../Matches/Matches';
import Messages from '../Messages/Messages';
import PersonalityQuiz from '../PeronalityQuiz/PersonalityQuiz';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { SlPeople } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { GoGear } from "react-icons/go";

// npm install react-countup

const Dashboard = () => {
  const [activeTab, setactiveTab] = useState('Home');
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(label) {
    setactiveTab(label);
    console.log(activeTab);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true); // Optional: auto-open on desktop
      }
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize); // update on resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function renderContent() {
    switch (activeTab) {
      case "Home":
        return (
          <div className="overflow-auto h-screen">
            <Home />
          </div>
        );
      case "RoomMateHub":
        return <RoomMateHub />;
      case "Matches":
        return <Matches />;
      case "Messages":
        return <Messages />
      case "Personality":
        return <PersonalityQuiz />
      case "Profile":
        return <Profile />
      case "Settings":
        return <Settings />
      default:
        return <Home />; // or null, or a loader
    }
  }
  return (
    <div className="flex min-h-screen font-sans bg-gray-50 animate__animated animate__fadeIn w-full ">
      {/* Sidebar */}
      <aside className={`${isOpen ? 'md:w-[264px]' : 'w-[100px]'}  bg-[#111827] shadow-md transition-all duration-200 hidden md:block`}>
        <div className='flex justify-around border-b-2 bg-[#111827] md:w-[100%] mt-[8px] pb-5'>
          <h1 className={`${isOpen ? '' : 'hidden'} text-2xl font-bold text-[#717ef4] mb-8px mt-[8px] bg-[#111827] relative text-center`}>RoomSync</h1>
          {isOpen ? <GoArrowLeft onClick={() => setIsOpen(!isOpen)} className='mb-[20px] bg-[#111827]  w-[50px] h-[25px] relative top-3 rounded-xl text-white hover:text-[#3148a2] cursor-pointer transition-all duration-200' />
            : <GoArrowRight onClick={() => setIsOpen(!isOpen)} className={`mb-[20px] bg-[#111827]  w-[50px] h-[25px] relative top-1 rounded-xl text-white hover:text-[#3148a2] cursor-pointer transition-all duration-200`} />}
        </div>
        <nav className="space-y-6 text-gray-700 bg-[#111827] p-6" >
          <NavItem icon={<FiHome className='bg-white'/>} label="Home" onClick={handleClick} isOpen={isOpen} active={activeTab === "Home"} />
          <NavItem icon={<SlPeople className='bg-white'/>} label="RoomMateHub" onClick={handleClick} isOpen={isOpen} active={activeTab === "RoomMateHub"} />
          <NavItem icon={<CiHeart className='bg-white'/>} label="Matches" onClick={handleClick} isOpen={isOpen} active={activeTab === "Matches"} />
          <NavItem icon={<FiMessageSquare className='bg-white'/>} label="Messages" badge={3} onClick={handleClick} isOpen={isOpen} active={activeTab === "Messages"} />
          <NavItem icon={<FaFileAlt className='bg-white'/>} label="Personality" onClick={handleClick} isOpen={isOpen} active={activeTab === "Personality"} />
          <NavItem icon={<CiUser className='bg-white'/>} label="Profile" onClick={handleClick} isOpen={isOpen} active={activeTab === "Profile"} />
          <NavItem icon={<GoGear className='bg-white'/>} label="Settings" onClick={handleClick} isOpen={isOpen} active={activeTab === "Settings"} />
        </nav>
      </aside>

      {/* Main Content */}
      <div className='bg-[#f6f7f9] px-10px py-10px w-full sm:items-center'>
        {renderContent()}
      </div>
    </div>
  );
};

// Sidebar nav item
const NavItem = ({ icon, label, active = false, badge, onClick, isOpen }) => (
  <div
    onClick={() => { onClick(label) }}
    className={`flex group items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200
      ${active ? 'bg-[#271944] font-semibold shadow-xl' : ' hover:bg-[#1f2937]'}
    `}
  >
    <div className={`flex items-center gap-3 transition-all duration-200 ${active ? 'bg-[#271944]' : ' group-hover:bg-[#1f2937]'}`}>
      <span className={`transition-all duration-200 ${active ? 'bg-[#271944]' : ' group-hover:text-[#1FADAD]'} text-center text-xl p-2`}>{icon}</span>
      <span className={`${isOpen ? '' : 'hidden'} transition-all duration-200 ${active ? 'bg-[#271944] text-white' : ' text-[#afd5db]'}`}>{label}</span>
      {badge && (
        <span className="bg-blue-400 text-white text-xs px-2 py-0.5 rounded-full transition-all duration-200">{badge}</span>
      )}
    </div>
  </div>
);

// Feature cards
const FeatureCard = ({ icon, title, description }) => (
  <div className="flex flex-col px-4 py-6 w-full max-w-md border-2 bg-white rounded-xl transition-all duration-200 space-y-3 hover:scale-105">
    <span className='text-[50px]'>{icon}</span>
    <h3 className='text-xl sm:text-2xl font-semibold'>{title}</h3>
    <p className='text-[#747a82] text-base sm:text-xl leading-relaxed'>{description}</p>
  </div>
);

// Stats block
const StatBlock = ({ value, label }) => (
  <div className='text-center'>
    <h2 className='text-3xl sm:text-4xl font-bold text-blue-400'>{value}</h2>
    <p className='text-gray-500'>{label}</p>
  </div>
);

export default Dashboard;
