import React from 'react'

const Account = () => {
  
  return (
    <div className='flex flex-col space-y-10 rounded-xl animate__animated animate__fadeInUp'>
      <div className=' w-[100%] md:h-[350px] p-6 space-y-2  shadow-xl rounded-xl bg-white'>
        <h1 className='text-2xl bg-white'>Account Information</h1>
        <div className='flex flex-col md:flex-row  md:justify-around bg-white'>
          <div className='flex flex-col space-y-2 md:h-[100px] bg-white ml-[-40px]'>
            <label htmlFor="" className='text-xl bg-white'>Current Password</label>
            <input type="text" className='w-full  md:w-[500px] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
          </div>
          <div className='flex flex-col space-y-2 bg-white'>
            <label htmlFor="" className='text-xl bg-white'>New Password</label>
            <input type="text" className='w-full md:w-[500px] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
          </div>
        </div>
        <div className='flex flex-col space-y-2  bg-white ml-[30] mb-20'>
          <label htmlFor="" className='text-xl bg-white'>Confirm Password</label>
          <input type="text" className='w-full md:w-[70rem] h-[50%] rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
         shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] border-none focus:outline-none'/>
        </div>
        <button className='text-white bg-[#70aefa] rounded-xl w-[200px] md:h-[50px]  hover:bg-[#83b9fa] hover:text-[#377acb] transition-all duration-300 hover:shadow-xl'>Update Password</button>
      </div>

      <div className='w-[100%] md:h-[180px] p-6 space-y-2 bg-white shadow-xl rounded-xl'>
        <h2 className='text-2xl font-semibold text-gray-800 bg-white'>Language & Region</h2>

        <div className='flex flex-col md:flex-row md:justify-between space-x-6 bg-white'>
          {/* Language */}
          <div className='flex flex-col w-1/2 space-y-2 bg-white'>
            <label htmlFor='language' className='text-md text-gray-800 bg-white'>Language</label>
            <select
              id='language'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* Time Zone */}
          <div className='flex flex-col w-1/2 space-y-2 bg-white'>
            <label htmlFor='timezone' className='text-md text-gray-800 bg-white'>Time Zone</label>
            <select
              id='timezone'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>Pacific Standard Time</option>
              <option>India Standard Time</option>
              <option>Central European Time</option>
            </select>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:h-[300px]  bg-white shadow-xl rounded-xl flex flex-col p-6 space-y-2'>
        <h1 className='text-2xl bg-white'>Account Actions</h1>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Download Your Data</h1>
            <p className='text-[#7b6f7e] bg-white'>Get a copy of your profile data and activity</p>
          </div>
          <div className=" cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] group hover:shadow-2xl">
            <button className='w-[100%] hover:bg-[#d7e9fe] transition-all duration-300'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1  className='text-xl bg-white'>Deactivate Account</h1>
            <p  className='text-[#7b6f7e] bg-white'>Temporarily hide your profile from other users</p>
          </div>
          <div className=" cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] group hover:shadow-2xl">
            <button className='w-[100%] hover:bg-[#d7e9fe] transition-all duration-300 '>Deactivate</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1  className='text-xl bg-white'>Delete Account</h1>
            <p  className='text-[#7b6f7e] bg-white'>Permanently delete your account and all data</p>
          </div>
          <div className="bg-red-500 hover:bg-red-400 group cursor-pointer px-2 py-2 rounded-xl h-[45px] w-[100px] text-center shadow-md transition-all duration-400 group hover:shadow-2xl">
            <button className='w-[100%] bg-red-500 text-white group-hover:bg-red-400 transition-all duration-300'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account