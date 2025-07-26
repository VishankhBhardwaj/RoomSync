import React from 'react'
import Account from '../../Components/SettingsComponent/Account/Account'
import Notifications from '../../Components/SettingsComponent/Notifications/Notifications'
import Billings from '../../Components/SettingsComponent/Billings/Billings'
import Privacy from '../../Components/SettingsComponent/Privacy/Privacy'
import { GoGear } from "react-icons/go";
const Settings = () => {
  const [activeTab, setActiveTab] = React.useState('Account')

  function handleComponent() {
    switch (activeTab) {
      case "Account": return <Account />
      case "Notifications": return <Notifications />
      case "Billings": return <Billings />
      case "Privacy": return <Privacy />
      default: return <Account />
    }
  }

  return (
    <div className='flex flex-col px-6 md:px-16 lg:px-20 py-6 h-full w-full space-y-6  bg-[#0f1625]'>
      <div>
        <h1 className='text-3xl md:text-6xl lg:text-5xl font-semibold flex flex-row gap-3 text-white'><GoGear className='text-3xl md:text-6xl text-white'/> Settings</h1>
        <p className='text-base md:text-xl text-gray-600'>Manage your account preferences and privacy settings</p>
      </div>
      
      <div className='text-center bg-[#192231] shadow-xl rounded-md w-full flex items-center justify-around px-2 py-1 md:h-[45px]'>
        <ul className='flex flex-wrap justify-around w-full bg-[#192231]'>
          {['Account', 'Notifications', 'Privacy', 'Billings'].map((tab) => (
            <li
              key={tab}
              className={`transition-all duration-200 text-xs text-white  sm:text-sm md:w-[25%] md:text-base lg:text-xl px-2 py-1 rounded-md cursor-pointer ${activeTab === tab
                  ? 'bg-[#271944] text-[#a5b4fc] shadow-sm'
                  : 'text-[#1f2937]'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-full max-h-[600px] overflow-y-auto rounded-xl custom-scrollbar'>
        {handleComponent()}
      </div>
    </div>
  )
}

export default Settings
