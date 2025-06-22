import React from 'react'

const BasicInfo = () => {
  return (
    <div className='w-full h-full flex flex-col md:flex-row md:justify-around p-8 gap-10'>
      {/* profile-card */}
      <div className="flex flex-col md:w-[250px] items-center shadow-md p-3 rounded-xl bg-white space-y-6">
        <div className='w-full bg-white'>
          <img src="/myphoto.jpeg" alt="" className='w-[96px] h-[96px] rounded-full object-cover bg-white mx-auto' />
        </div>
        <div className='text-center bg-white w-full flex flex-col gap-2'>
          <h1 className='text-center bg-white text-xl'>Jane Smith</h1>
          <span className='text-center text-white bg-[#60a5fa] w-[60%] rounded-full block mx-auto text-sm'>
            Premium Member
          </span>
          <p className='text-center bg-white text-gray-400'>📍 San Francisco, CA</p>
          <p className='text-center bg-white text-gray-400'>🎂 24 years old</p>
          <p className='text-center bg-white text-gray-400'>✅ Verified Profile</p>
        </div>
        <div className='bg-white md:w-full md:h-[12%]'>
          <button className='w-full h-[80%] text-center shadow-md mx-auto bg-[#60a5fa] hover:bg-[#70aefa] rounded-xl text-white'>Change Photo</button>
        </div>
      </div>

      {/* info */}
      <div className="flex flex-col md:w-[70%] md:h-full rounded-xl shadow-md bg-white gap-4 p-7">
        <h1 className='bg-white text-xl'>Basic Information</h1>
        <div className='p-1 bg-white'>
          <div className='flex flex-col gap-3 bg-white'>

            {/* First Row */}
            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>First Name</label>
                <input type="text" className='bg-gradient-to-b outline-blue-400 from-white to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl' placeholder='Jane' />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Last Name</label>
                <input type="text" className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl' placeholder='Smith' />
              </div>
            </div>

            {/* Second Row */}
            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Email</label>
                <input type="text" className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl' placeholder='jane.smith@email.com' />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Phone</label>
                <input type="text" className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl' placeholder='+1 (555) 123-4567' />
              </div>
            </div>

            {/* Third Row */}
            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Date of Birth</label>
                <input
                  type="date"
                  className="bg-gradient-to-b from-white to-gray-100 text-gray-700 shadow-inner border border-gray-300 w-full h-10 p-2 rounded-xl cursor-pointer 
                  hover:bg-[#6e9ed5] hover:text-[#6e9ed5] outline-blue-400 transition-colors duration-200"
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Occupation</label>
                <input type="text" className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl' placeholder='Software Engineer' />
              </div>
            </div>

            {/* Bio */}
            <div className='bg-white w-full'>
              <h1 className='bg-white'>Bio</h1>
              <textarea
                className="w-full p-2 rounded-xl bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 placeholder-gray-400"
                placeholder="I'm a software engineer who loves cooking, yoga, and exploring the city. Looking for a clean, respectful roommate to share a modern apartment with."
              ></textarea>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
