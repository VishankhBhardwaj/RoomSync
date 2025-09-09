import React, { useEffect, useState } from 'react'
import 'animate.css';
import axios from 'axios';
const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:3000/api/PhotosUploadedByUser/photosData', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPhotos(res.data.data.photos);
        console.log(res.data.data.photos)
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [])
  return (
    <div className='max-h-screen min-w-screen p-2 md:p-5 rounded-xl animate__animated animate__fadeInUp'>
      <div className='flex flex-col items-center gap-3 p-2 w-full h-full min-h-[auto] md:min-h-0 md:h-[400px] bg-[#1f2937] rounded-xl lg:items-start lg:pl-10 shadow-xl'>
        <h1 className='text-lg md:text-xl text-white self-start ml-2 md:ml-0'>Profile Photos</h1>
        <div className='flex flex-col md:flex-row items-center gap-4 md:gap-5 p-2 w-full h-full md:min-h-0 md:h-[300px] bg-[#1f2937] rounded-xl lg:items-start overflow-x-auto custom-scrollbar'>
          <div className='flex flex-col items-center p-2 gap-2 md:gap-3 w-full min-w-[90%] md:min-w-[30%] h-[200px] md:h-[250px] bg-[#2a3139] rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[90%] md:w-[80%] h-[70%] bg-[#273141] text-gray-600 rounded-xl'>
              {photos[0]?.photoUrl ? (
                <img
                  src={photos[0].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-xs md:text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[90%] md:w-[80%] bg-[#273141] hover:bg-[#303949] text-white text-sm rounded-md h-[20%] cursor-pointer transition-all duration-400'>{photos[0] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-2 md:gap-3 w-full min-w-[90%] md:min-w-[30%] h-[200px] md:h-[250px] bg-[#2a3139] rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[90%] md:w-[80%] h-[70%] bg-[#273141] text-gray-600 rounded-xl'>
              {photos[1]?.photoUrl ? (
                <img
                  src={photos[1].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-xs md:text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[90%] md:w-[80%] bg-[#273141] hover:bg-[#303949] text-white text-sm rounded-md h-[20%] cursor-pointer transition-all duration-400'>{photos[1] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-2 md:gap-3 w-full min-w-[90%] md:min-w-[30%] h-[200px] md:h-[250px] bg-[#2a3139] rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[90%] md:w-[80%] h-[70%] bg-[#273141] text-gray-600 rounded-xl'>
              {photos[2]?.photoUrl ? (
                <img
                  src={photos[2].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-xs md:text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[90%] md:w-[80%] bg-[#273141] hover:bg-[#303949] text-white text-sm rounded-md h-[20%] cursor-pointer transition-all duration-400'>{photos[2] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-2 md:gap-3 w-full min-w-[90%] md:min-w-[30%] h-[200px] md:h-[250px] bg-[#2a3139] rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[90%] md:w-[80%] h-[70%] bg-[#273141] text-gray-600 rounded-xl'>
              {photos[3]?.photoUrl ? (
                <img
                  src={photos[3].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-xs md:text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[90%] md:w-[80%] bg-[#273141] hover:bg-[#303949] rounded-md h-[20%] cursor-pointer text-white text-sm transition-all duration-400'>{photos[3] ? "Change Photo" : "Upload Photo"}</button>
          </div>

        </div>
        <p className='text-sm md:text-base text-white self-start px-2 md:px-0 my-2'>Add up to 4 photos to help potential roommates get to know you better.</p>
      </div>
    </div>
  )
}

export default Photos