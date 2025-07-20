import React from 'react'
import Account from '../../Components/SettingsComponent/Account/Account'
import Notifications from '../../Components/SettingsComponent/Notifications/Notifications'
import Billings from '../../Components/SettingsComponent/Billings/Billings'
import Privacy from '../../Components/SettingsComponent/Privacy/Privacy'

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
    <div className='flex flex-col px-6 md:px-16 lg:px-20 py-6 h-full w-full space-y-6 overflow-y-auto'>
      <div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold'>⚙️ Settings</h1>
        <p className='text-base md:text-xl text-[#7a6f7e]'>Manage your account preferences and privacy settings</p>
      </div>

      <div className='bg-[#f3f4f6] shadow-xl rounded-xl w-full md:w-[90%] lg:w-[80%] xl:w-[70%] mx-auto p-4'>
        <ul className='flex flex-wrap gap-4 justify-center'>
          <li
            className={`text-sm md:text-lg lg:text-xl px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTab === 'Account' ? 'bg-[#f6f7f9] shadow text-black' : 'text-[#7a6f7e]'
            }`}
            onClick={() => setActiveTab('Account')}
          >
            Account
          </li>
          <li
            className={`text-sm md:text-lg lg:text-xl px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTab === 'Notifications' ? 'bg-[#f6f7f9] shadow text-black' : 'text-[#7a6f7e]'
            }`}
            onClick={() => setActiveTab('Notifications')}
          >
            Notifications
          </li>
          <li
            className={`text-sm md:text-lg lg:text-xl px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTab === 'Privacy' ? 'bg-[#f6f7f9] shadow text-black' : 'text-[#7a6f7e]'
            }`}
            onClick={() => setActiveTab('Privacy')}
          >
            Privacy
          </li>
          <li
            className={`text-sm md:text-lg lg:text-xl px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 ${
              activeTab === 'Billings' ? 'bg-[#f6f7f9] shadow text-black' : 'text-[#7a6f7e]'
            }`}
            onClick={() => setActiveTab('Billings')}
          >
            Billings
          </li>
        </ul>
      </div>
      <div className='w-full max-h-[600px] overflow-y-auto rounded-xl'>
        {handleComponent()}
      </div>
    </div>
  )
}

export default Settings
