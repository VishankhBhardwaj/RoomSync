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
        // toast.error("Failed to load user data");
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
    <div className='w-full h-full flex flex-col md:flex-row md:justify-around md:py-8 md:px-0 gap-10 rounded-xl animate__animated animate__fadeInUp bg-[#0f1625]'>
      <div className="flex flex-col md:w-[250px] items-center shadow-md p-3 rounded-xl bg-[#1f2937] space-y-6 ">
        <div className='w-full bg-[#1f2937]'>
          <img src="/myphoto.jpeg" alt="" className='w-[96px] h-[96px] rounded-full object-cover bg-[#1f2937] mx-auto' />
        </div>
        <div className='text-center bg-[#1f2937] w-full flex flex-col gap-2'>
          <h1 className='text-center bg-[#1f2937] text-xl'>
            {userData.FirstName} {userData.LastName}
          </h1>
          <span className='text-center text-white bg-[#1fadad] w-[60%] rounded-full block mx-auto text-sm'>
            Premium Member
          </span>
          <p className='text-center  text-gray-400'>📍 San Francisco, CA</p>
          <p className='text-center  text-gray-400'>
            🎂 {userData.DateOfBirth ? new Date(userData.DateOfBirth).getFullYear() : ''} years old
          </p>
          <p className='text-center  text-[#1fadad]'>✅ Verified Profile</p>
        </div>
        <div className=' md:w-full md:h-[10%] hover:shadow-2xl transition-all duration-300'>
          <button className='w-full h-[100%] text-center shadow-md mx-auto bg-[#5b1c8e] hover:bg-[#a257e0] rounded-md text-white transition-all duration-200'>Change Photo</button>
        </div>
      </div>

      <div className="flex flex-col md:w-[70%] md:h-full rounded-xl shadow-md bg-[#1f2937] gap-4 p-7">
        <h1 className=' text-xl text-white'>Basic Information</h1>
        <div className='p-1 bg-[#1f2937]'>
          <div className='flex flex-col gap-3 '>

            <div className='flex flex-col md:flex-row w-full gap-2 '>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>First Name</label>
                <input
                  type="text"
                  name="FirstName"
                  value={userData.FirstName}
                  onChange={handleChange}
                  className=' outline-[#611d98]  bg-[#374151] text-white shadow-inner  w-full h-10 p-2 rounded-md'
                  placeholder='Jane'
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  value={userData.LastName}
                  onChange={handleChange}
                  className=' outline-[#611d98] bg-[#374151] text-white shadow-inner  w-full h-10 p-2 rounded-md'
                  placeholder='Smith'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-2 '>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>Email</label>
                <input
                  type="text"
                  name="Email"
                  value={userData.Email}
                  onChange={handleChange}
                  className=' outline-[#611d98]  bg-[#374151] text-white shadow-inner  w-full h-10 p-2 rounded-md'
                  placeholder='jane.smith@email.com'
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>Phone</label>
                <input
                  type="text"
                  name="PhoneNumber"
                  value={userData.PhoneNumber}
                  onChange={handleChange}
                  className=' outline-[#611d98]  bg-[#374151] text-white shadow-inner  w-full h-10 p-2 rounded-md'
                  placeholder='+1 (555) 123-4567'
                />
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-2 '>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>Date of Birth</label>
                <input
                  type="date"
                  name="DateOfBirth"
                  value={userData.DateOfBirth}
                  onChange={handleChange}
                  className=" outline-[#611d98] bg-[#374151] text-white  shadow-inner  w-full h-10 p-2 rounded-md cursor-pointer 
                   hover:text-[#1fadad]  transition-colors duration-200"
                />
              </div>
              <div className='flex flex-col w-full md:w-[50%] gap-2 '>
                <label className='text-[#88a3af]'>Occupation</label>
                <input
                  type="text"
                  name="Occupation"
                  value={userData.Occupation}
                  onChange={handleChange}
                  className=' outline-[#611d98]  bg-[#374151] text-white shadow-inner  w-full h-10 p-2 rounded-md'
                  placeholder='Software Engineer'
                />
              </div>
            </div>

            <div className=' w-full'>
              <h1 className='text-[#88a3af]'>Bio</h1>
              <textarea
                name="Bio"
                value={userData.Bio}
                onChange={handleChange}
                className="w-full p-2 rounded-md bg-[#374151] text-white   outline-[#611d98]   shadow-inner  placeholder-gray-400"
                placeholder="I'm a software engineer who loves cooking, yoga, and exploring the city. Looking for a clean, respectful roommate to share a modern apartment with."
              ></textarea>
            </div>
            <button
              className="mt-4 px-6 py-2 bg-[#1fadad] hover:bg-[#51b9b9] text-white rounded-md shadow-md"
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
