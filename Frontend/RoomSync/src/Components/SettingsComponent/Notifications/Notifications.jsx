import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
const Notifications = () => {
  const [isMarketingOptedIn, setIsMarketingOptIn] = useState(false);
  const handleMarketing = async () => {
    try {
      const newStatus = !isMarketingOptedIn;
      setIsMarketingOptIn(newStatus);
      const token = localStorage.getItem("token");
      const res = await axios.post('http://localhost:3000/api/userData/setMarketing', { newStatus }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching marketing opt-in status:", error.message);
    }
  }

  useEffect(() => {

    async function fetchMarketingOptInStatus() {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/userData/marketing", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setIsMarketingOptIn(res.data.isMarketingOptedIn);
      } catch (error) {
        console.error("Error fetching marketing opt-in status:", error.message);
      }
    }
    fetchMarketingOptInStatus();
  }, [])
  return (
    <div className='flex flex-col space-y-4 rounded-md animate__animated animate__fadeInUp p-2 md:p-0'>
      <div className='w-full bg-[#1f2937] shadow-xl rounded-md flex flex-col p-4 md:p-6 space-y-3 md:space-y-2'>
        <h1 className='text-xl md:text-2xl text-white'>Email Notifications</h1>
        <div className="flex flex-col md:flex-row md:justify-between border-b-2 pb-4 md:pb-5">
          <div className="flex flex-col mb-3 md:mb-0">
            <h1 className='text-lg md:text-xl text-white'>Weekly Match Summary</h1>
            <p className='text-[#7b6f7e] text-sm md:text-base'>Receive a weekly email with your best matches</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-md h-[40px] md:h-[45px] w-full md:w-[100px] text-center shadow-md transition-all bg-[#7220b8] duration-400 hover:shadow-2xl">
            <button className='w-full bg-[#7220b8] group-hover:shadow-2xl hover:text-white text-sm md:text-base'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between border-b-2 pb-4 md:pb-5">
          <div className="flex flex-col mb-3 md:mb-0">
            <h1 className='text-lg md:text-xl text-white'>Marketing Emails</h1>
            <p className='text-[#7b6f7e] text-sm md:text-base'>Receive tips, updates, and promotional content</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-md h-[40px] md:h-[45px] w-full md:w-[100px] text-center shadow-md transition-all duration-400 bg-[#7220b8] hover:shadow-2xl">
            <button onClick={() => handleMarketing()} className='w-full bg-[#7220b8] hover:text-white group-hover:shadow-2xl text-sm md:text-base'>{isMarketingOptedIn ? "Deactivate" : "Activate"}</button>
          </div>
        </div>
      </div>
      <div className='w-full p-4 md:p-6 space-y-3 md:space-y-2 bg-[#1f2937] shadow-xl rounded-md flex flex-col'>
        <h1 className='text-xl md:text-2xl text-white'>Push Notifications</h1>
        <div className="flex flex-col md:flex-row md:justify-between border-b-2 pb-4 md:pb-5">
          <div className="flex flex-col mb-3 md:mb-0">
            <h1 className='text-lg md:text-xl text-white'>New Matches</h1>
            <p className='text-[#7b6f7e] text-sm md:text-base'>Get notified when you have new roommate matches</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-md h-[40px] md:h-[45px] bg-[#7220b8] w-full md:w-[100px] text-center shadow-md transition-all duration-400 hover:shadow-2xl">
            <button className='w-full bg-[#7220b8] group-hover:shadow-2xl hover:text-white text-sm md:text-base'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between border-b-2 pb-4 md:pb-5">
          <div className="flex flex-col mb-3 md:mb-0">
            <h1 className='text-lg md:text-xl text-white'>Messages</h1>
            <p className='text-[#7b6f7e] text-sm md:text-base'>Get notified when you receive new messages</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-md h-[40px] md:h-[45px] w-full md:w-[100px] bg-[#7220b8] text-center shadow-md transition-all duration-400 hover:shadow-2xl">
            <button className='w-full bg-[#7220b8] group-hover:shadow-2xl hover:text-white text-sm md:text-base'>Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications