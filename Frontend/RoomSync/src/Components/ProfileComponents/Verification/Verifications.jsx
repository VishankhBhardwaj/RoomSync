import React from 'react'
import { IoCheckmarkDone } from "react-icons/io5";
const Verifications = () => {
  return (
    <div className=' max-h-screen p-3 rounded-xl'>
      <div className='  h-[300px] flex flex-col p-3 gap-3 rounded-xl bg-white shadow-xl'>
        <h1 className='text-2xl bg-white'>Identity Verification</h1>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Email Verified
            </p>
          </div>
          <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p>
        </div>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Phone Verified
            </p>
          </div>
          <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p>
        </div>
        <div className="flex flex-row h-[60px] justify-between border-2 border-gray-200 p-3 rounded-xl bg-white">
          <div className='flex flex-row gap-2 bg-white'>
            <IoCheckmarkDone className="text-green-500 text-3xl bg-white" />
            <p className='text-xl bg-white text-slate-700'>Government Id
            </p>
          </div>
          <p className='text-md  w-[80px] text-center h-[30px] rounded-2xl bg-[#f0f2f4] text-gray-600'>verified</p>
        </div>
      </div>

    </div>
  )
}

export default Verifications