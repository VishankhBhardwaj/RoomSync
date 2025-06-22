import React from 'react'
import BasicInfo from "../../Components/ProfileComponents/Basic Info/BasicInfo"
import Preferences from "../../Components/ProfileComponents/Preferences/Preferences"
import Photos from "../../Components/ProfileComponents/Photos/Photos"
import Verification from "../../Components/ProfileComponents/Verification/Verifications"

const Profile = () => {
  const [activeTab, setActiveTab] = React.useState('Account');
  function handleComponent() {
    switch (activeTab) {
      case "Basic Info": return <BasicInfo />
      case "Preferences": return <Preferences />
      case "Photos": return <Photos />
      case "Verification": return <Verification/>
      default: return <BasicInfo/>
    }
  }
  return (
    <div className='flex flex-col px-20 py-6 h-[100%] w-[100%] space-y-3 overflow-y-scroll'>
      <div>
        <h1 className='text-5xl'>⚙️ Settings</h1>
        <p className='text-2xl text-[#7a6f7e]'>Manage your account preferences and privacy settings</p>
      </div>
      <div className='text-center bg-[#f3f4f6] shadow-xl shadow-gray-300 rounded-xl   w-[60%] h-[40%]  md:h-[60px] flex items-center justify-around md:w-[100%]'>
        <ul className='flex flex-col md:flex-row gap-3'>
          <li className={`md:text-2xl    rounded-xl md:w-[40%] p-2 cursor-pointer ${activeTab === 'Basic Info' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Basic Info')}>BasicInfo</li>
          <li className={`md:text-2xl  rounded-xl md:w-[40%] p-2 cursor-pointer ${activeTab === 'Preferences' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Preferences')}>Preferences</li>
          <li className={`md:text-2xl   rounded-xl md:w-[40%] p-2 cursor-pointer ${activeTab === 'Photos' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Photos')}>Photos</li>
          <li className={`md:text-2xl   rounded-xl md:w-[40%] p-2 cursor-pointer ${activeTab === 'Verification' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Verification')}>Verification</li>
        </ul>
      </div>
      <div className='md:h-[600px] '>
        {handleComponent()}
      </div>
    </div>
  )
}

export default Profile