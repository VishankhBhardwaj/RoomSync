import React, { useState } from 'react';
import axios from 'axios'
const Preferences = () => {
  const [userPreferences, setUserPreferences] = useState({
    budget: 1200,
    location: '',
    moveInDate: '',
    cleanliness: '',
    social: '',
    lifestyle: '',
    interest: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (name, value) => {
    setUserPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSave(){
    try{
      const token = localStorage.getItem('token');
      const res = await axios.post(
        'http://localhost:3000/api/updateUserPref/userPreferences',
        userPreferences,
        {
          headers: {
        Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    }catch(err){
      console.error('Error saving preferences:', err);
    }
  }

  return (
    <div className="py-2 px-2 md:py-6 md:px-0 space-y-4 md:space-y-6 w-full flex flex-col items-center rounded-md animate__animated animate__fadeInUp">
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-6xl rounded-md">
        <div className="bg-[#1f2937] p-4 md:p-6 rounded-md shadow-sm w-full md:w-1/2 space-y-3 md:space-y-4">
          <h2 className="text-base md:text-lg font-semibold bg-[#1f2937] text-white">Living Preferences</h2>
          <div className="bg-[#1f2937]">
            <label className="block mb-1 text-sm md:text-base text-white">
              Budget Range: ${userPreferences.budget}/month
            </label>
            <input
              type="range"
              min="500"
              max="5000"
              name="budget"
              value={userPreferences.budget}
              onChange={handleChange}
              className="w-full accent-[#7420bb] outline-[#621d99] bg-[#374151] text-white"
            />
          </div>

          <div className="">
            <label className="block mb-1 text-sm md:text-base text-white">Preferred Location</label>
            <select
              name="location"
              value={userPreferences.location}
              onChange={handleChange}
              className="w-full outline-[#621d99] p-2 h-10 rounded-md border bg-[#374151] shadow-inner text-white text-sm md:text-base"
            >
              <option value="">Select area</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburbs">Suburbs</option>
            </select>
          </div>

          <div className="">
            <label className="block mb-1 text-sm md:text-base text-white">Preferred Move-in Date</label>
            <div className="relative ">
              <input
                type="date"
                name="moveInDate"
                value={userPreferences.moveInDate}
                onChange={handleChange}
                className="w-full outline-[#621d99] p-2 h-10 rounded-md border bg-[#374151] shadow-inner text-white text-sm md:text-base cursor-pointer transition-all"
              />
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 rounded-md bg-[#1f2937] shadow-sm w-full md:w-1/2 space-y-3 md:space-y-4">
          <h2 className="text-base md:text-lg font-semibold text-white">Lifestyle Preferences</h2>

          <div className="">
            <label className="block mb-1 text-sm md:text-base text-white">Cleanliness Level</label>
            <select
              name="cleanliness"
              value={userPreferences.cleanliness}
              onChange={handleChange}
              className="w-full outline-[#621d99] p-2 h-10 rounded-md border bg-[#374151] shadow-inner text-white text-sm md:text-base"
            >
              <option value="">Select cleanliness preference</option>
              <option value="Very Clean">Very Clean</option>
              <option value="Average">Average</option>
            </select>
          </div>

          <div className="">
            <label className="block mb-1 text-sm md:text-base text-white">Social Level</label>
            <select
              name="social"
              value={userPreferences.social}
              onChange={handleChange}
              className="w-full outline-[#621d99] p-2 h-10 rounded-md border bg-[#374151] shadow-inner text-white text-sm md:text-base"
            >
              <option value="">Select social preference</option>
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4 pt-2">
            {[
              'Early Riser',
              'Night Owl',
              'Pet Friendly',
              'Non-Smoker',
              'Social Drinker',
              'Fitness Enthusiast',
            ].map((trait) => (
              <label key={trait} className="flex items-center space-x-1 mb-1">
                <input
                  type="radio"
                  name="lifestyle"
                  value={trait}
                  checked={userPreferences.lifestyle === trait}
                  onChange={() => handleRadioChange('lifestyle', trait)}
                  className="bg-[#374151] text-white outline-[#621d99]"
                />
                <span className="text-white text-xs md:text-sm">{trait}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#1f2937] p-4 md:p-6 rounded-md shadow-sm w-full max-w-6xl space-y-3 md:space-y-4">
        <h2 className="text-base md:text-lg font-semibold text-white">Interests & Hobbies</h2>
        <div className="flex flex-wrap gap-2 md:gap-4">
          {[
            'Cooking', 'Yoga', 'Travel', 'Photography', 'Reading', 'Coffee',
            'Art', 'Running', 'Gaming', 'Tech', 'Movies', 'Music',
            'Fitness', 'Nature', 'Volunteering', 'Hiking',
          ].map((interest) => (
            <label key={interest} className="flex items-center space-x-1 mb-1">
              <input
                type="radio"
                name="interest"
                value={interest}
                checked={userPreferences.interest === interest}
                onChange={() => handleRadioChange('interest', interest)}
                className="bg-[#374151] text-white outline-[#621d99]"
              />
              <span className="text-white text-xs md:text-sm">{interest}</span>
            </label>
          ))}
        </div>

        <button
          className="mt-4 w-full md:w-auto px-4 md:px-6 py-2 bg-[#5f1d94] hover:bg-[#9347d1] text-white rounded-md shadow-md text-sm md:text-base transition-all duration-200"
          onClick={handleSave}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Preferences;
