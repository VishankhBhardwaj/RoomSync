import {React,useState} from 'react';
import { FaHome, FaChartBar, FaHeart, FaComments, FaUser, FaCog, FaFileAlt } from 'react-icons/fa';
import CountUp from 'react-countup'; // Make sure this is installed
import Home from '../Home/Home';
import RoomMateHub from '../RoomMateHub/RoomMateHub';
import Matches from '../Matches/Matches';
import Messages from '../Messages/Messages';
import PersonalityQuiz from '../PeronalityQuiz/PersonalityQuiz';
import Profile from '../Profile/Profile';
import Settings from '../Settings/Settings';

// npm install react-countup

const Dashboard = () => {
  const [activeTab,setactiveTab]=useState('Home');
  function handleClick(label){
    setactiveTab(label);
    console.log(activeTab);
  };
  
  function renderContent() {
  switch (activeTab) {
    case "Home":
      return <Home />;
    case "RoomMateHub":
      return <RoomMateHub />;
    case "matches":
      return <Matches />;
    case "Messages":
      return <Messages/>
    case "Personality":
      return <PersonalityQuiz/>
    case "Profile":
      return <Profile/>
    case "Settings":
      return <Settings/>
    default:
      return <Home/>; // or null, or a loader
  }
}
  return (
    <div className="flex min-h-screen font-sans bg-gray-50 animate__animated animate__backInUp">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-8 bg-white">RoomSync</h1>
        <nav className="space-y-6 text-gray-700 bg-white" >
          <NavItem icon={<FaHome />} label="Home" onClick={handleClick}/>
          <NavItem icon={<FaChartBar />} label="RoomMateHub" onClick={handleClick}/>
          <NavItem icon={<FaHeart />} label="Matches" onClick={handleClick}/>
          <NavItem icon={<FaComments />} label="Messages" badge={3} onClick={handleClick}/>
          <NavItem icon={<FaFileAlt />} label="Personality Quiz" onClick={handleClick}/>
          <NavItem icon={<FaUser />} label="Profile" onClick={handleClick}/>
          <NavItem icon={<FaCog />} label="Settings" onClick={handleClick}/>
        </nav>
      </aside>

      {/* Main Content */}
      <div className='bg-[#f6f7f9] border-2 border-red-400 px-10px py-10px w-full'>
        {renderContent()}
      </div>
    </div>
  );
};

// Sidebar nav item
const NavItem = ({ icon, label, active = false, badge,onClick }) => (
  <div onClick={()=>{onClick(label)}} className={`flex group items-center justify-between bg-white hover:bg-[#ebf4fe] p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${active ? 'bg-gray-100 font-semibold' : ''}`}>
    <div className="flex items-center gap-3 bg-white ">
      <span className='bg-white group-hover:bg-[#ebf4fe]'>{icon}</span>
      <span className='bg-white group-hover:bg-[#ebf4fe]'>{label}</span>
    </div>
    {badge && (
      <span className="bg-blue-400 text-white text-xs px-2 py-0.5 rounded-full">{badge}</span>
    )}
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
