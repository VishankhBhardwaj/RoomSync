import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col space-y-6 md:space-y-10 rounded-md p-2 md:p-0'>
      <div className='w-full p-4 md:p-6 space-y-4 md:space-y-6 shadow-xl rounded-md bg-[#1f2937] animate__animated animate__fadeInUp'>
        <h1 className='text-xl md:text-2xl font-semibold text-white'>Account Information</h1>

        <div className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-6'>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full md:w-1/2 animate__animated animate__fadeInLeft'>
            <label className='text-lg md:text-xl text-white'>Current Password</label>
            <input
              type="password"
              className='w-full h-[45px] md:h-[50px] rounded-md p-3 bg-[#374151] text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
            />
          </div>
          <div className='flex flex-col space-y-1 md:space-y-2 w-full md:w-1/2 animate__animated animate__fadeInRight mt-3 md:mt-0'>
            <label className='text-lg md:text-xl text-white'>New Password</label>
            <input
              type="password"
              className='w-full h-[45px] md:h-[50px] rounded-md p-3 bg-[#374151] text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
            />
          </div>
        </div>

        <div className='flex flex-col space-y-1 md:space-y-2 mt-3 md:mt-0 animate__animated animate__fadeInUp animate__delay-1s'>
          <label className='text-lg md:text-xl text-white'>Confirm Password</label>
          <input
            type="password"
            className='w-full h-[45px] md:h-[50px] rounded-md p-3 bg-[#374151] text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'
          />
        </div>

        <button className='text-white bg-[#1fadad] hover:bg-[#59d4d4] rounded-md w-full md:w-[200px] h-[45px] md:h-[50px] mt-4 hover:text-white transition-all duration-300 hover:shadow-xl animate__animated animate__fadeInUp animate__delay-1s'>
          Update Password
        </button>
      </div>

      <div className='w-full p-4 md:p-6 space-y-3 md:space-y-4 bg-[#1f2937] shadow-xl rounded-md animate__animated animate__fadeInUp animate__delay-1s'>
        <h2 className='text-xl md:text-2xl font-semibold text-white'>Language & Region</h2>
        <div className='flex flex-col md:flex-row md:justify-between gap-4 md:gap-6'>
          <div className='flex flex-col w-full md:w-1/2 space-y-1 md:space-y-2 animate__animated animate__fadeInLeft'>
            <label htmlFor='language' className='text-sm md:text-md text-white'>Language</label>
            <select
              id='language'
              className='w-full h-[45px] md:h-auto rounded-md p-3 bg-[#374151] text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Hindi</option>
            </select>
          </div>

          <div className='flex flex-col w-full md:w-1/2 space-y-1 md:space-y-2 animate__animated animate__fadeInRight mt-3 md:mt-0'>
            <label htmlFor='timezone' className='text-sm md:text-md text-white'>Time Zone</label>
            <select
              id='timezone'
              className='w-full h-[45px] md:h-auto rounded-md p-3 bg-[#374151] text-white shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>Pacific Standard Time</option>
              <option>India Standard Time</option>
              <option>Central European Time</option>
            </select>
          </div>
        </div>
      </div>

      <div className='w-full bg-[#1f2937] shadow-xl rounded-md flex flex-col p-4 md:p-6 space-y-4 md:space-y-6 animate__animated animate__fadeInUp animate__delay-2s'>
        <h1 className='text-xl md:text-2xl font-semibold text-white'>Account Actions</h1>

        {[
          {
            title: 'Download Your Data',
            desc: 'Get a copy of your profile data and activity',
            button: 'Download',
            className: 'hover:bg-[#1fadad]',
            danger: false,
          },
          {
            title: 'Deactivate Account',
            desc: 'Temporarily hide your profile from other users',
            button: 'Deactivate',
            className: 'hover:bg-[#1fadad]',
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
            className='flex flex-col md:flex-row md:justify-between items-start md:items-center border-b pb-4 md:pb-5 space-y-3 md:space-y-0 animate__animated animate__fadeInUp animate__delay-2s'
          >
            <div className=''>
              <h2 className='text-lg md:text-xl font-semibold text-white'>{action.title}</h2>
              <p className='text-[#7b6f7e] text-sm md:text-base'>{action.desc}</p>
            </div>
            <button
              className={`w-full md:w-[120px] py-2 mt-1 md:mt-0 rounded-md text-center hover:text-white shadow-md text-sm md:text-base transition-all duration-300 ${action.className} ${action.danger ? '' : 'bg-white'}`}
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
