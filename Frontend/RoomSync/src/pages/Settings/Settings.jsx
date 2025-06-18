import React from 'react'
import Account from '../../Components/SettingsComponent/Account/Account'
import Notifications from '../../Components/SettingsComponent/Notifications/Notifications'
import Billings from '../../Components/SettingsComponent/Billings/Billings'
import Privacy from '../../Components/SettingsComponent/Privacy/Privacy'
const Settings = () => {
  const [activeTab, setActiveTab] = React.useState('Account');
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
    <div className='flex flex-col px-20 py-6 border-2 border-green-400 h-[100%] w-[100%] space-y-3'>
      <div>
        <h1 className='text-5xl'>⚙️ Settings</h1>
        <p className='text-2xl text-[#7a6f7e]'>Manage your account preferences and privacy settings</p>
      </div>
      <div className='text-center bg-[#f3f4f6] shadow-xl rounded-xl  border-2 w-[43%] h-[60px] flex items-center justify-around md:w-[20%]'>
        <ul className='flex gap-3'>
          <li className={`text-2xl    rounded-xl w-[40%] p-2 cursor-pointer ${activeTab === 'Account' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Account')}>Account</li>
          <li className={`text-2xl  rounded-xl w-[40%] p-2 cursor-pointer ${activeTab === 'Notifications' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Notifications')}>Notifications</li>
          <li className={`text-2xl   rounded-xl w-[40%] p-2 cursor-pointer ${activeTab === 'Privacy' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Privacy')}>Privacy</li>
          <li className={`text-2xl   rounded-xl w-[40%] p-2 cursor-pointer ${activeTab === 'Billings' ? 'bg-[#f6f7f9] shadow-sm text-black' : 'text-[#7a6f7e]'
            }`} onClick={() => setActiveTab('Billings')}>Billings</li>
        </ul>
      </div>
      <div className='border-2 border-green-400 h-[100%]'>
        {handleComponent()}
      </div>
    </div>
  )
}

export default Settings