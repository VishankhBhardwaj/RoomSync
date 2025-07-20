import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col space-y-10 rounded-xl'>
      <div className='w-full p-6 space-y-6 shadow-xl rounded-xl bg-white animate__animated animate__fadeInUp'>
        <h1 className='text-2xl font-semibold bg-white'>Account Information</h1>

        <div className='flex flex-col md:flex-row md:justify-between gap-6 bg-white'>
          <div className='flex flex-col space-y-2 w-full md:w-1/2 bg-white animate__animated animate__fadeInLeft'>
            <label className='text-xl bg-white'>Current Password</label>
            <input
              type="password"
              className='w-full h-[50px] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
            />
          </div>
          <div className='flex flex-col space-y-2 w-full md:w-1/2 bg-white animate__animated animate__fadeInRight'>
            <label className='text-xl bg-white'>New Password</label>
            <input
              type="password"
              className='w-full h-[50px] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
            />
          </div>
        </div>

        <div className='flex flex-col space-y-2 bg-white animate__animated animate__fadeInUp animate__delay-1s'>
          <label className='text-xl bg-white'>Confirm Password</label>
          <input
            type="password"
            className='w-full h-[50px] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
          />
        </div>

        <button className='text-white bg-[#70aefa] rounded-xl w-full md:w-[200px] h-[50px] hover:bg-[#83b9fa] hover:text-[#377acb] transition-all duration-300 hover:shadow-xl animate__animated animate__fadeInUp animate__delay-1s'>
          Update Password
        </button>
      </div>

      <div className='w-full p-6 space-y-4 bg-white shadow-xl rounded-xl animate__animated animate__fadeInUp animate__delay-1s'>
        <h2 className='text-2xl font-semibold text-gray-800 bg-white'>Language & Region</h2>
        <div className='flex flex-col md:flex-row md:justify-between gap-6 bg-white'>
          <div className='flex flex-col w-full md:w-1/2 space-y-2 bg-white animate__animated animate__fadeInLeft'>
            <label htmlFor='language' className='text-md text-gray-800 bg-white'>Language</label>
            <select
              id='language'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className='flex flex-col w-full md:w-1/2 space-y-2 bg-white animate__animated animate__fadeInRight'>
            <label htmlFor='timezone' className='text-md text-gray-800 bg-white'>Time Zone</label>
            <select
              id='timezone'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>Pacific Standard Time</option>
              <option>India Standard Time</option>
              <option>Central European Time</option>
            </select>
          </div>
        </div>
      </div>

      <div className='w-full bg-white shadow-xl rounded-xl flex flex-col p-6 space-y-6 animate__animated animate__fadeInUp animate__delay-2s'>
        <h1 className='text-2xl font-semibold bg-white'>Account Actions</h1>

        {[
          {
            title: 'Download Your Data',
            desc: 'Get a copy of your profile data and activity',
            button: 'Download',
            className: 'hover:bg-[#d7e9fe]',
            danger: false,
          },
          {
            title: 'Deactivate Account',
            desc: 'Temporarily hide your profile from other users',
            button: 'Deactivate',
            className: 'hover:bg-[#d7e9fe]',
            danger: false,
          },
          {
            title: 'Delete Account',
            desc: 'Permanently delete your account and all data',
            button: 'Delete',
            className: 'bg-red-500 text-white hover:bg-red-400',
            danger: true,
          },
        ].map((action, index) => (
          <div
            key={index}
            className='flex flex-col md:flex-row md:justify-between items-start md:items-center border-b pb-5 space-y-3 md:space-y-0 bg-white animate__animated animate__fadeInUp animate__delay-2s'
          >
            <div className='bg-white'>
              <h2 className='text-xl font-semibold bg-white'>{action.title}</h2>
              <p className='text-[#7b6f7e] bg-white'>{action.desc}</p>
            </div>
            <button
              className={`w-[120px] py-2 rounded-xl text-center shadow-md transition-all duration-300 ${action.className} ${action.danger ? '' : 'bg-white'}`}
            >
              {action.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Account
