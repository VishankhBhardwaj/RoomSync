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
    <div className='max-h-screen min-w-screen p-5 rounded-xl animate__animated animate__fadeInUp'>
      <div className='flex flex-col items-center gap-3 p-2 w-full h-full min-h-[100vh] md:min-h-0 md:h-[400px] bg-white rounded-xl lg:items-start lg:pl-10 shadow-xl'>
        <h1 className='text-xl bg-white md:ml-0'>Profile Photos</h1>
        <div className='flex flex-col md:flex-row items-center gap-3 md:gap-5 p-2 w-full h-full min-h-[100vh] md:min-h-0 md:h-[300px]  bg-white rounded-xl lg:items-start overflow-x-scroll'>
          <div className='flex flex-col items-center p-2 gap-3 w-full min-w-[30%] h-[250px] bg-white rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[80%] h-[70%] bg-[#f3f4f6] text-gray-600 rounded-xl'>
              {photos[0]?.photoUrl ? (
                <img
                  src={photos[0].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[80%] bg-[#f3f4f6] rounded-xl h-[20%] cursor-pointer hover:bg-[#7bcfdc] hover:text-white transition-all duration-400'>{photos[0] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-3 w-full min-w-[30%] h-[250px] bg-white rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[80%] h-[70%] bg-[#f3f4f6] text-gray-600 rounded-xl'>
              {photos[1]?.photoUrl ? (
                <img
                  src={photos[1].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[80%] bg-[#f3f4f6] rounded-xl h-[20%] cursor-pointer hover:bg-[#7bcfdc] hover:text-white transition-all duration-400'>{photos[1] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-3 w-full min-w-[30%] h-[250px] bg-white rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[80%] h-[70%] bg-[#f3f4f6] text-gray-600 rounded-xl'>
              {photos[2]?.photoUrl ? (
                <img
                  src={photos[2].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[80%] bg-[#f3f4f6] rounded-xl h-[20%] cursor-pointer hover:bg-[#7bcfdc] hover:text-white transition-all duration-400'>{photos[2] ? "Change Photo" : "Upload Photo"}</button>
          </div>
          <div className='flex flex-col items-center p-2 gap-3 w-full min-w-[30%] h-[250px] bg-white rounded-xl [box-shadow:inset_0_6px_15px_rgba(0,0,0,0.05),inset_0_-6px_15px_rgba(0,0,0,0.05)]'>
            <div className='flex flex-row justify-center items-center w-[80%] h-[70%] bg-[#f3f4f6] text-gray-600 rounded-xl'>
              {photos[3]?.photoUrl ? (
                <img
                  src={photos[3].photoUrl}
                  alt="User Uploaded"
                  className='w-full h-full object-cover rounded-xl'
                />
              ) : (
                <span className="text-sm text-gray-500">Main Photo</span>
              )}
            </div>
            <button className='w-[80%] bg-[#f3f4f6] rounded-xl h-[20%] cursor-pointer hover:bg-[#7bcfdc] hover:text-white transition-all duration-400'>{photos[3] ? "Change Photo" : "Upload Photo"}</button>
          </div>

        </div>
        <p className='bg-white text-gray-600 md:self-start'>Add up to 4 photos to help potential roommates get to know you better.</p>
      </div>
    </div>
  )
}

export default Photos