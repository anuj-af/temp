import React from 'react';
import avatar from '../../assets/avatar.png';
import sortByImage from '../../assets/sortby.png';

const Sidebar = () => {
  return (
    <div className="bg-hblue2 text-white w-72 h-screen p-8 border-y border-gray-400">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img 
            src={avatar}
            alt="Profile Avatar" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="mt-4 text-lg font-semibold">PRN8910048</p>
      </div>

      {/* Sort By Section */}
      <div className="mb-6">
        <img 
          src={sortByImage} 
          alt="Sort By Icon" 
          className="cursor-pointer" // Adjusted size for consistency
        />
      </div>
      
      <hr className="border-gray-400 mb-6" /> {/* Grey line after Sort By */}

      {/* State Dropdown */}
      <div className="mb-6">
        <label htmlFor="state" className="text-sm font-medium block mb-2">
          State
        </label>
        <select
          id="state"
          className="w-full bg-hblue1 text-white py-2 px-3 rounded-md"
        >
          <option>Select State</option>
          <option>State 1</option>
          <option>State 2</option>
        </select>
      </div>
      
      <hr className="border-gray-400 mb-6" /> {/* Grey line after State */}

      {/* College Dropdown */}
      <div className="mb-6">
        <label htmlFor="college" className="text-sm font-medium block mb-2">
          College
        </label>
        <select
          id="college"
          className="w-full bg-hblue1 text-white py-2 px-3 rounded-md"
        >
          <option>Select College</option>
          <option>College 1</option>
          <option>College 2</option>
        </select>
      </div>
      
      <hr className="border-gray-500 mb-6" /> {/* Grey line after College */}

      {/* Semester Radio Buttons */}
      <div>
        <p className="text-sm font-medium mb-2">Semester</p>
        <div className="space-y-2">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`semester${i + 1}`}
                name="semester"
                value={i + 1}
                className="accent-blue-600"
              />
              <label htmlFor={`semester${i + 1}`} className="text-sm">
                {i + 1}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
