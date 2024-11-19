import React from 'react'
import { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'


const AddressDetails = () => {
  const {userData,setUserData}=useContext(StepperContext);

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  }
  return (
    <div>AddressDetails</div>
  )
}

export default AddressDetails