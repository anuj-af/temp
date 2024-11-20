import React, { useEffect } from 'react'
import { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'


const Final = () => {
  const {userData,setUserData}=useContext(StepperContext);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  }
  return (
    <div>Final</div>
  )
}

export default Final