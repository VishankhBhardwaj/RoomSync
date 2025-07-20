import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const BasicInfo = () => {
  const [userData, setUserData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    DateOfBirth: '',
    Occupation: '',
    Bio: ''
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/userData/userInfo',{
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        
        setUserData((prev) => ({
          ...prev,
          FirstName: res.data.user.FirstName || '',
          LastName: res.data.user.LastName || '',
          Email: res.data.user.Email || '',
          PhoneNumber:res.data.PhoneNumber || '',
          DateOfBirth:res.data.DateOfBirth || '',
          Occupation:res.data.Occupation || '',
          Bio:res.data.Bio || ''
        }));
      } catch (err) {
        toast.error("Failed to load user data");
        console.error(err.response?.data?.error || err.message);
      }
    }
    fetchData();
  }, []);

  async function handleSubmit() {
    try {
      const res = await axios.post('http://localhost:3000/api/updateinfo/updateUserInfo', userData);
      toast.success("Data Updated Successfully");
    } catch (err) {
      toast.error("Failed to update data");
      console.error(err.response?.data?.error || err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className='w-full h-full flex flex-col md:flex-row md:justify-around md:p-8 gap-10 rounded-xl animate__animated animate__fadeInUp'>
      <div className="flex flex-col md:w-[250px] items-center shadow-md p-3 rounded-xl bg-white space-y-6">
        <div className='w-full bg-white'>
          <img src="/myphoto.jpeg" alt="" className='w-[96px] h-[96px] rounded-full object-cover bg-white mx-auto' />
        </div>
        <div className='text-center bg-white w-full flex flex-col gap-2'>
          <h1 className='text-center bg-white text-xl'>
            {userData.FirstName} {userData.LastName}
          </h1>
          <span className='text-center text-white bg-[#60a5fa] w-[60%] rounded-full block mx-auto text-sm'>
            Premium Member
          </span>
          <p className='text-center bg-white text-gray-400'>📍 San Francisco, CA</p>
          <p className='text-center bg-white text-gray-400'>
            🎂 {userData.DateOfBirth ? new Date(userData.DateOfBirth).getFullYear() : ''} years old
          </p>
          <p className='text-center bg-white text-gray-400'>✅ Verified Profile</p>
        </div>
        <div className='bg-white md:w-full md:h-[10%] hover:shadow-2xl transition-all duration-300'>
          <button className='w-full h-[100%] text-center shadow-md mx-auto bg-[#60a5fa] hover:bg-[#70aefa] rounded-xl text-white'>Change Photo</button>
        </div>
      </div>

      <div className="flex flex-col md:w-[70%] md:h-full rounded-xl shadow-md bg-white gap-4 p-7">
        <h1 className='bg-white text-xl'>Basic Information</h1>
        <div className='p-1 bg-white'>
          <div className='flex flex-col gap-3 bg-white'>

            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  value={userData.FirstName}
                  onChange={handleChange}
                  className='bg-gradient-to-b outline-blue-400 from-white to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl'
                  placeholder='Jane'
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  value={userData.LastName}
                  onChange={handleChange}
                  className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl'
                  placeholder='Smith'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Email</label>
                <input
                  type="text"
                  name="Email"
                  value={userData.Email}
                  onChange={handleChange}
                  className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl'
                  placeholder='jane.smith@email.com'
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Phone</label>
                <input
                  type="text"
                  name="PhoneNumber"
                  value={userData.PhoneNumber}
                  onChange={handleChange}
                  className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl'
                  placeholder='+1 (555) 123-4567'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-2 bg-white'>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Date of Birth</label>
                <input
                  type="date"
                  name="DateOfBirth"
                  value={userData.DateOfBirth}
                  onChange={handleChange}
                  className="bg-gradient-to-b from-white to-gray-100 text-gray-700 shadow-inner border border-gray-300 w-full h-10 p-2 rounded-xl cursor-pointer 
                  hover:bg-[#6e9ed5] hover:text-[#6e9ed5] outline-blue-400 transition-colors duration-200"
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 bg-white'>
                <label className='bg-white'>Occupation</label>
                <input
                  type="text"
                  name="Occupation"
                  value={userData.Occupation}
                  onChange={handleChange}
                  className='bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 w-full h-10 p-2 rounded-xl'
                  placeholder='Software Engineer'
                />
              </div>
            </div>

            <div className='bg-white w-full'>
              <h1 className='bg-white'>Bio</h1>
              <textarea
                name="Bio"
                value={userData.Bio}
                onChange={handleChange}
                className="w-full p-2 rounded-xl bg-gradient-to-b from-white outline-blue-400 to-gray-100 text-gray-700 shadow-inner border border-gray-200 placeholder-gray-400"
                placeholder="I'm a software engineer who loves cooking, yoga, and exploring the city. Looking for a clean, respectful roommate to share a modern apartment with."
              ></textarea>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-[#70aefa] hover:bg-[#76aef2] text-white rounded-xl shadow-md"
              onClick={handleSubmit}
            >
              Update Information
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo
