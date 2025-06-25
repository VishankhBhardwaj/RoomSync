import React, { useState } from 'react';

const Preferences = () => {
  const [budget, setBudget] = useState(1200);
  
  return (
    <div className="p-6 space-y-6 w-full flex flex-col items-center  min-h-screen rounded-xl animate__animated animate__fadeInUp">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl bg-white rounded-xl">

        {/* Living Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold  bg-white">Living Preferences</h2>

          {/* Budget Slider */}
          <div className=' bg-white'>
            <label className="block mb-1  bg-white">Budget Range: ${budget}/month</label>
            <input
              type="range"
              min="500"
              max="5000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full accent-[#70aefa]  bg-white outline-[#6e9ed5]"
            />
          </div>

          {/* Location Dropdown */}
          <div className=' bg-white'>
            <label className="block mb-1  bg-white">Preferred Location</label>
            <select className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700">
              <option>Select area</option>
              <option>Downtown</option>
              <option>Suburbs</option>
            </select>
          </div>

          {/* Date Picker */}
          <div className=' bg-white'>
            <label className="block mb-1  bg-white">Preferred Move-in Date</label>
            <div className="relative  bg-white">
              <input
                type="date"
                className="w-full hover:bg-[#6e9ed5] hover:text-[#6e9ed5] outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700 cursor-pointer  transition-all"
              />
            </div>
          </div>
        </div>

        {/* Lifestyle Preferences */}
        <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-1/2 space-y-4 ">
          <h2 className="text-lg font-semibold  bg-white">Lifestyle Preferences</h2>

          {/* Cleanliness */}
          <div className=' bg-white'> 
            <label className="block mb-1  bg-white">Cleanliness Level</label>
            <select className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700">
              <option>Select cleanliness preference</option>
              <option>Very Clean</option>
              <option>Average</option>
            </select>
          </div>

          {/* Social Level */}
          <div className=' bg-white'>
            <label className="block mb-1  bg-white">Social Level</label>
            <select className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700">
              <option>Select social preference</option>
              <option>Introvert</option>
              <option>Extrovert</option>
            </select>
          </div>

          {/* Lifestyle Traits */}
          <div className="flex flex-wrap gap-4 pt-2  bg-white">
            {[
              'Early Riser',
              'Night Owl',
              'Pet Friendly',
              'Non-Smoker',
              'Social Drinker',
              'Fitness Enthusiast',
            ].map((trait) => (
              <label key={trait} className="flex items-center space-x-1  bg-white">
                <input type="radio" name="lifestyle" />
                <span className=' bg-white'>{trait}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Interests & Hobbies */}
      <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-5xl space-y-4">
        <h2 className="text-lg font-semibold  bg-white">Interests & Hobbies</h2>
        <div className="flex flex-wrap gap-4  bg-white">
          {[
            'Cooking', 'Yoga', 'Travel', 'Photography', 'Reading', 'Coffee',
            'Art', 'Running', 'Gaming', 'Tech', 'Movies', 'Music',
            'Fitness', 'Nature', 'Volunteering', 'Hiking',
          ].map((interest) => (
            <label key={interest} className="flex items-center space-x-1  bg-white">
              <input type="radio" name="interest" className=' bg-white'/>
              <span className=' bg-white'>{interest}</span>
            </label>
          ))}
        </div>

        {/* Save Button */}
        <button className="mt-4 px-6 py-2 bg-[#70aefa] hover:bg-[#76aef2] text-white rounded-xl shadow-md">
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Preferences;
