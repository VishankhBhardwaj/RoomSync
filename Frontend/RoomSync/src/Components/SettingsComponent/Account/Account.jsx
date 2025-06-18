import React from 'react'

const Account = () => {
  return (
    <div className='flex flex-col space-y-10'>
      <div className=' w-[100%] h-[350px] p-6 space-y-2 bg-white shadow-xl rounded-xl'>
        <h1 className='text-2xl bg-white'>Account Information</h1>
        <div className='flex justify-around '>
          <div className='flex flex-col space-y-2 h-[100px] bg-white'>
            <label htmlFor="" className='text-xl bg-white'>Current Password</label>
            <input type="text" className=' w-[500px] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
          </div>
          <div className='flex flex-col space-y-2 bg-white'>
            <label htmlFor="" className='text-xl bg-white'>New Password</label>
            <input type="text" className=' w-[500px] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
          </div>
        </div>
        <div className='flex flex-col space-y-2 h-[100px] bg-white'>
          <label htmlFor="" className='text-xl bg-white'>Confirm Password</label>
          <input type="text" className=' w-[70rem] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
        </div>
        <button className='text-white bg-[#70aefa] rounded-xl w-[200px] h-[50px] shadow-sm hover:bg-[#70aefa]'>Updata Password</button>
      </div>

      <div className='w-[100%] h-[180px] p-6 space-y-2 bg-white shadow-xl rounded-xl'>
        <h2 className='text-2xl font-semibold text-gray-800'>Language & Region</h2>

        <div className='flex justify-between space-x-6'>
          {/* Language */}
          <div className='flex flex-col w-1/2 space-y-2'>
            <label htmlFor='language' className='text-md text-gray-800'>Language</label>
            <select
              id='language'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none'
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* Time Zone */}
          <div className='flex flex-col w-1/2 space-y-2'>
            <label htmlFor='timezone' className='text-md text-gray-800'>Time Zone</label>
            <select
              id='timezone'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none'
            >
              <option>Pacific Standard Time</option>
              <option>India Standard Time</option>
              <option>Central European Time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account