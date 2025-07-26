import React from 'react'
import BasicInfo from "../../Components/ProfileComponents/Basic Info/BasicInfo"
import Preferences from "../../Components/ProfileComponents/Preferences/Preferences"
import Photos from "../../Components/ProfileComponents/Photos/Photos"
import Verification from "../../Components/ProfileComponents/Verification/Verifications"
import { CiUser } from "react-icons/ci";
const Profile = () => {
  const [activeTab, setActiveTab] = React.useState('Account');
  function handleComponent() {
    switch (activeTab) {
      case "Basic Info": return <BasicInfo />
      case "Preferences": return <Preferences />
      case "Photos": return <Photos />
      case "Verification": return <Verification />
      default: return <BasicInfo />
    }
  }
  return (
    <div className='flex flex-col pr-2 pl-6 py-4 md:px-20 md:py-6 h-[100%] w-[100%]  space-y-3  bg-[#0f1625]'>
      <div className='w-[300px] md:w-full'>
        <h1 className='text-3xl md:text-6xl text-white flex flex-row gap-3'><CiUser className='text-3xl md:text-6xl'/> Profile</h1>
        <p className='text-2xl text-gray-600'>Manage your profile information and preferences</p>
      </div>
      <div className='text-center bg-[#192231] shadow-xl rounded-md w-full flex items-center justify-around px-2 py-1 md:h-[45px]'>
        <ul className='flex flex-wrap justify-around w-full bg-[#192231]'>
          {['Basic Info', 'Preferences', 'Photos', 'Verification'].map((tab) => (
            <li
              key={tab}
              className={`transition-all duration-200 text-white text-xs  sm:text-sm md:w-[25%] md:text-base lg:text-xl px-2 py-1 rounded-md cursor-pointer ${activeTab === tab
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

      <div className='md:h-[600px] bg-[#0f1625]'>
        {handleComponent()}
      </div>
    </div>
  )
}

export default Profile