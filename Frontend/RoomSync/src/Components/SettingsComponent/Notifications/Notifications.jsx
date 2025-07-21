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
    <div className='flex flex-col space-y-4 rounded-xl animate__animated animate__fadeInUp'>
      <div className='w-[100%] md:h-[250px]  bg-white shadow-xl rounded-xl flex flex-col p-6 space-y-2'>
        <h1 className='text-2xl bg-white'>Email Notifications</h1>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Weekly Match Summary</h1>
            <p className='text-[#7b6f7e] bg-white'>Receive a weekly email with your best matches</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] hover:shadow-2xl">
            <button className='w-[100%] hover:bg-[#d7e9fe] group-hover:shadow-2xl'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Marketing Emails</h1>
            <p className='text-[#7b6f7e] bg-white'>Receive tips, updates, and promotional content</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] hover:shadow-2xl">
            <button onClick={() => handleMarketing()} className='w-[100%] hover:bg-[#d7e9fe] group-hover:shadow-2xl'>{isMarketingOptedIn ? "Deactivate" : "Activate"}</button>
          </div>
        </div>
      </div>
      <div className='w-[100%] md:h-[250px] p-6 space-y-2 bg-white shadow-xl rounded-xl flex flex-col'>
        <h1 className='text-2xl bg-white'>Push Notifications</h1>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>New Matches</h1>
            <p className='text-[#7b6f7e] bg-white'>Get notified when you have new roommate matches</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] hover:shadow-2xl">
            <button className='w-[100%] hover:bg-[#d7e9fe] group-hover:shadow-2xl'>Download</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between bg-white border-b-2 pb-5 md:h-[]">
          <div className="flex flex-col ">
            <h1 className='text-xl bg-white'>Messages</h1>
            <p className='text-[#7b6f7e] bg-white'>Get notified when you receive new messages</p>
          </div>
          <div className="group cursor-pointer px-2 py-2 rounded-xl md:h-[45px] w-[100px] text-center shadow-md transition-all duration-400 hover:bg-[#d7e9fe] hover:shadow-2xl">
            <button className='w-[100%] hover:bg-[#d7e9fe] group-hover:shadow-2xl'>Deactivate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications