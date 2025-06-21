import React from 'react'

const Privacy = () => {
  return (
    <div className='flex flex-col space-y-3'>
       <div className='w-[100%] md:h-[180px] p-6 space-y-2 bg-white shadow-xl rounded-xl'>
        <h2 className='text-2xl font-semibold text-gray-800 bg-white'>Profile Visibility</h2>

        <div className='flex flex-col md:flex-row md:justify-between space-x-6 bg-white'>
          {/* Language */}
          <div className='flex flex-col w-1/2 space-y-2 bg-white'>
            <label htmlFor='language' className='text-md text-gray-800 bg-white'>Who can see your profile</label>
            <select
              id='language'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>EveryOne</option>
              <option>Verified Users only</option>
              <option>Matches only</option>
            </select>
          </div>

          {/* Time Zone */}
          <div className='flex flex-col w-1/2 space-y-2 bg-white'>
            <label htmlFor='timezone' className='text-md text-gray-800 bg-white'>Distance Visibility</label>
            <select
              id='timezone'
              className='w-full rounded-xl p-3 bg-gradient-to-b from-[#f1f2f6] to-white 
            shadow-[inset_0_4px_8px_rgba(0,0,0,0.1)] focus:outline-none appearance-none cursor-pointer'
            >
              <option>Show exact location</option>
              <option>Show approximate area</option>
              <option>Hide location</option>
            </select>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:h-[350px] p-6 space-y-2 bg-white shadow-xl rounded-xl flex flex-col p-6 space-y-2'>
        <h1 className='text-2xl bg-white'>Data Usage</h1>
        <div className='rounded-xl bg-red-400 md:h-[60px] '>
          <p className='bg-[#f6f7f9] md:h-[100%] p-5  text-center'>We use your data to improve match quality and provide personalized recommendations. You can control how your data is used below.</p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Improve Matching Algorithm</h1>
            <p className='text-[#7b6f7e] bg-white'>Allow us to use your activity to improve matches for everyone</p>
          </div>
          <div className=" cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe]">
            <button className='w-[100%] hover:bg-[#d7e9fe]'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5 md:h-[]">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Analytics & Research</h1>
            <p className='text-[#7b6f7e] bg-white'>Help us understand user behavior to improve our service</p>
          </div>
          <div className=" cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe]">
            <button className='w-[100%] hover:bg-[#d7e9fe]'>Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy