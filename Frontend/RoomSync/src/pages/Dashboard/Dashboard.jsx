import React from 'react';
import { FaHome, FaChartBar, FaHeart, FaComments, FaUser, FaCog, FaFileAlt } from 'react-icons/fa';
import CountUp from 'react-countup'; // Make sure this is installed
// npm install react-countup

const Dashboard = () => {
  const handleClick = () => {
    alert('Matching started!');
  };

  return (
    <div className="flex min-h-screen font-sans bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">RoomSync</h1>
        <nav className="space-y-6 text-gray-700">
          <NavItem icon={<FaHome />} label="Home" />
          <NavItem icon={<FaChartBar />} label="Dashboard" active />
          <NavItem icon={<FaHeart />} label="Matches" />
          <NavItem icon={<FaComments />} label="Messages" badge={3} />
          <NavItem icon={<FaFileAlt />} label="Personality Quiz" />
          <NavItem icon={<FaUser />} label="Profile" />
          <NavItem icon={<FaCog />} label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-4xl font-bold mb-2">
          Find Your Perfect <span className="text-blue-400">Roommate</span>
        </h2>
        <p className="text-gray-600 mb-6">
          AI-powered matching helps you discover compatible roommates based on lifestyle, preferences, and personality traits.
        </p>

        {/* Buttons */}
        <div className='flex flex-col sm:flex-row mt-8 w-full sm:w-[60%] space-y-4 sm:space-y-0 sm:space-x-6'>
          <button
            className='bg-[#61a6fa] w-full sm:w-[70%] rounded-md h-12 transition-all duration-200 hover:scale-105 text-white font-bold'
            onClick={handleClick}>
            🚀 Start Matching Now
          </button>
          <button className='w-full sm:w-[80%] rounded-md bg-[#d7e9fe] transition-all duration-200 hover:scale-105 text-black font-bold h-12'>
            📝 Take Personality Quiz
          </button>
        </div>

        {/* Cards */}
        <div className='flex flex-col lg:flex-row justify-center items-center gap-6 mt-10 px-4'>
          <FeatureCard
            icon="🧠"
            title="AI-POWERED MATCHING"
            description="Advanced algorithms analyze personality traits, lifestyle preferences, and compatibility factors."
          />
          <FeatureCard
            icon="💬"
            title="Smart Chat System"
            description="Connect with potential roommates through our secure messaging platform with real-time chat."
          />
          <FeatureCard
            icon="🔒"
            title="Safe & Verified"
            description="All users are verified for safety. Background checks and identity verification available."
          />
        </div>

        {/* Stats Section */}
        <div className='w-full flex flex-col sm:flex-row justify-around items-center gap-8 mt-10 px-4 h-[200px]'>
          <StatBlock value={<CountUp end={15000} duration={2} separator="," suffix="+" />} label="Active Users" />
          <StatBlock value={<CountUp end={95} duration={2} suffix="%" />} label="Match Success" />
          <StatBlock value={<CountUp end={500} duration={2} suffix="+" />} label="Cities" />
          <StatBlock value={<CountUp end={24} duration={2} suffix="/7" />} label="Support" />
        </div>
      </main>
    </div>
  );
};

// Sidebar nav item
const NavItem = ({ icon, label, active = false, badge }) => (
  <div className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-100 ${active ? 'bg-gray-100 font-semibold' : ''}`}>
    <div className="flex items-center gap-3">
      <span>{icon}</span>
      <span>{label}</span>
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
