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
      const res = await axios.post('http://localhost:3000/api/updateUserPref/userPreferences',
        userPreferences
      );
      console.log(res.data);
    }catch(err){
      console.error('Error saving preferences:', err);
    }
  }

  return (
    <div className="p-6 space-y-6 w-full flex flex-col items-center min-h-screen rounded-xl animate__animated animate__fadeInUp">
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl bg-white rounded-xl">
        <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold bg-white">Living Preferences</h2>
          <div className="bg-white">
            <label className="block mb-1 bg-white">
              Budget Range: ${userPreferences.budget}/month
            </label>
            <input
              type="range"
              min="500"
              max="5000"
              name="budget"
              value={userPreferences.budget}
              onChange={handleChange}
              className="w-full accent-[#70aefa] bg-white outline-[#6e9ed5]"
            />
          </div>

          <div className="bg-white">
            <label className="block mb-1 bg-white">Preferred Location</label>
            <select
              name="location"
              value={userPreferences.location}
              onChange={handleChange}
              className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700"
            >
              <option value="">Select area</option>
              <option value="Downtown">Downtown</option>
              <option value="Suburbs">Suburbs</option>
            </select>
          </div>

          <div className="bg-white">
            <label className="block mb-1 bg-white">Preferred Move-in Date</label>
            <div className="relative bg-white">
              <input
                type="date"
                name="moveInDate"
                value={userPreferences.moveInDate}
                onChange={handleChange}
                className="w-full hover:bg-[#6e9ed5] hover:text-[#6e9ed5] outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700 cursor-pointer transition-all"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm w-full md:w-1/2 space-y-4">
          <h2 className="text-lg font-semibold bg-white">Lifestyle Preferences</h2>

          <div className="bg-white">
            <label className="block mb-1 bg-white">Cleanliness Level</label>
            <select
              name="cleanliness"
              value={userPreferences.cleanliness}
              onChange={handleChange}
              className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700"
            >
              <option value="">Select cleanliness preference</option>
              <option value="Very Clean">Very Clean</option>
              <option value="Average">Average</option>
            </select>
          </div>

          <div className="bg-white">
            <label className="block mb-1 bg-white">Social Level</label>
            <select
              name="social"
              value={userPreferences.social}
              onChange={handleChange}
              className="w-full outline-[#6e9ed5] p-2 h-10 rounded-xl border border-gray-200 bg-gradient-to-b from-white to-gray-100 shadow-inner text-gray-700"
            >
              <option value="">Select social preference</option>
              <option value="Introvert">Introvert</option>
              <option value="Extrovert">Extrovert</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 bg-white">
            {[
              'Early Riser',
              'Night Owl',
              'Pet Friendly',
              'Non-Smoker',
              'Social Drinker',
              'Fitness Enthusiast',
            ].map((trait) => (
              <label key={trait} className="flex items-center space-x-1 bg-white">
                <input
                  type="radio"
                  name="lifestyle"
                  value={trait}
                  checked={userPreferences.lifestyle === trait}
                  onChange={() => handleRadioChange('lifestyle', trait)}
                />
                <span className="bg-white">{trait}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm w-full max-w-5xl space-y-4">
        <h2 className="text-lg font-semibold bg-white">Interests & Hobbies</h2>
        <div className="flex flex-wrap gap-4 bg-white">
          {[
            'Cooking', 'Yoga', 'Travel', 'Photography', 'Reading', 'Coffee',
            'Art', 'Running', 'Gaming', 'Tech', 'Movies', 'Music',
            'Fitness', 'Nature', 'Volunteering', 'Hiking',
          ].map((interest) => (
            <label key={interest} className="flex items-center space-x-1 bg-white">
              <input
                type="radio"
                name="interest"
                value={interest}
                checked={userPreferences.interest === interest}
                onChange={() => handleRadioChange('interest', interest)}
                className="bg-white"
              />
              <span className="bg-white">{interest}</span>
            </label>
          ))}
        </div>

        <button
          className="mt-4 px-6 py-2 bg-[#70aefa] hover:bg-[#76aef2] text-white rounded-xl shadow-md"
          onClick={handleSave}
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Preferences;
