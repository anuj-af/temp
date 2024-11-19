import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'


const PersonalDetails = () => {
  const {userData,setUserData}=useContext(StepperContext);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  }

  return (
    <div>
      <h2>Personal Details</h2>
      <div className=' w-full mx-2 flex-1'>
        <div className=' font-bold h-6 mt-3 text-hblue2 text-xs leading-8 uppercase'>
          Name
        </div>
        <div className=' bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input type="text"
          onChange={handleChange}
          value={userData["name"] || ""}
          name="name"
          placeholder='Enter your name'
          className=' p-1 px-2 appearance-none outline-none w-full text-gray-800'
           />
        </div>
      </div>
    
    </div>
  )
}

export default PersonalDetails