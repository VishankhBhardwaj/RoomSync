import { React, useState, useEffect } from 'react';
import { FaHome, FaChartBar, FaHeart, FaComments, FaUser, FaCog } from 'react-icons/fa';
import CountUp from 'react-countup'; // Make sure this is installed
import Home from '../Home/Home';
import Matches from '../Matches/Matches';
import Messages from '../Messages/Messages';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';
import { GoArrowLeft, GoArrowRight, GoGear } from "react-icons/go";
import { FiHome, FiMessageSquare } from "react-icons/fi";
import { CiHeart, CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setactiveTab] = useState('Matches');
  const [isOpen, setIsOpen] = useState(true);
  function handleClick(label) {
    setactiveTab(label);
    
    if (window.innerWidth < 768) {
      window.scrollTo(0, 0);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true); 
      }
    };

    handleResize(); // run once on mount
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function renderContent() {
    switch (activeTab) {
      case "Matches":
        return <Matches />;
      case "Messages":
        return <Messages />
      case "Profile":
        return <Profile />
      case "Settings":
        return <Settings />
      default:
        return <Matches />;
    }
  }
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans bg-gray-50 animate__animated animate__fadeIn w-full">
      {/* Desktop Sidebar - hidden on mobile */}
      <aside className={`${isOpen ? 'md:w-[264px]' : 'md:w-[100px]'} bg-[#111827] shadow-2xl transition-all duration-200 hidden md:block border-r border-gray-200`}>
        <div className='flex justify-around border-b-2 bg-[#111827] md:w-[100%] mt-[8px] pb-5'>
          <Link to='/' className={`${isOpen ? '' : 'hidden'} text-2xl font-bold text-[#717ef4] mb-8px mt-[8px] bg-[#111827] relative text-center`}>RoomSync</Link>
          {isOpen ? <GoArrowLeft onClick={() => setIsOpen(!isOpen)} className='mb-[20px] bg-[#111827] w-[50px] h-[25px] relative top-3 rounded-xl text-white hover:text-[#3148a2] cursor-pointer transition-all duration-200' />
            : <GoArrowRight onClick={() => setIsOpen(!isOpen)} className={`mb-[20px] bg-[#111827] w-[50px] h-[25px] relative top-1 rounded-xl text-white hover:text-[#3148a2] cursor-pointer transition-all duration-200`} />}
        </div>
        <nav className="space-y-6 text-gray-700 bg-[#111827] p-6" >
          <NavItem icon={<CiHeart />} label="Matches" onClick={handleClick} isOpen={isOpen} active={activeTab === "Matches"} />
          <NavItem icon={<FiMessageSquare />} label="Messages" badge={3} onClick={handleClick} isOpen={isOpen} active={activeTab === "Messages"} />
          <NavItem icon={<CiUser />} label="Profile" onClick={handleClick} isOpen={isOpen} active={activeTab === "Profile"} />
          <NavItem icon={<GoGear />} label="Settings" onClick={handleClick} isOpen={isOpen} active={activeTab === "Settings"} />
        </nav>
      </aside>

      {/* Main content area */}
      <div className='bg-[#f6f7f9] w-full sm:items-center min-h-screen pb-16 md:pb-0'>
        {renderContent()}
      </div>

      {/* Mobile bottom navigation - visible only on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#111827] md:hidden flex justify-around py-3 shadow-lg z-10 border-t border-gray-700">
        <MobileNavItem icon={<CiHeart />} onClick={() => handleClick("Matches")} active={activeTab === "Matches"} />
        <MobileNavItem icon={<FiMessageSquare />} onClick={() => handleClick("Messages")} active={activeTab === "Messages"} badge={3} />
        <MobileNavItem icon={<CiUser />} onClick={() => handleClick("Profile")} active={activeTab === "Profile"} />
        <MobileNavItem icon={<GoGear />} onClick={() => handleClick("Settings")} active={activeTab === "Settings"} />
      </nav>
    </div>
  );
};


const NavItem = ({ icon, label, active = false, badge, onClick, isOpen }) => (
  <div
    onClick={() => { onClick(label) }}
    className={`flex group items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200
      ${active ? 'bg-[#271944] font-semibold shadow-xl' : ' hover:bg-[#1f2937]'}
    `}
  >
    <div className={`flex items-center gap-3 transition-all duration-200 ${active ? 'bg-[#271944]' : ' group-hover:bg-[#1f2937]'}`}>
      <span className={`transition-all duration-200 ${active ? 'text-[#1FADAD]' : 'text-white group-hover:text-[#1FADAD]'} text-center text-xl p-2`}>
        {icon}
      </span>
      <span className={`${isOpen ? '' : 'hidden'} transition-all duration-200 ${active ? 'text-white' : ' text-[#afd5db]'}`}>
        {label}
      </span>
      {badge && (
        <span className="bg-blue-400 text-white text-xs px-2 py-0.5 rounded-full transition-all duration-200">{badge}</span>
      )}
    </div>
  </div>
);


const MobileNavItem = ({ icon, active = false, badge, onClick }) => (
  <div
    onClick={onClick}
    className={`flex flex-col items-center justify-center transition-all duration-200 px-2 py-1 relative`}
  >
    <span className={`text-2xl ${active ? 'text-[#1FADAD]' : 'text-white'}`}>
      {icon}
    </span>
    {badge && (
      <span className="absolute -top-1 -right-1 bg-blue-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
        {badge}
      </span>
    )}
    {active && <div className="w-1 h-1 bg-[#1FADAD] rounded-full mt-1"></div>}
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
