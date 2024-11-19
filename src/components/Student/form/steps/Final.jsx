import React, { useEffect } from 'react'
import { useContext } from 'react'
import { StepperContext } from '../contexts/StepperContext'


const Final = () => {
  const {userData,setUserData}=useContext(StepperContext);
  const {finalData,setFinalData}=useContext(StepperContext);

  setFinalData({...userData});

  // useEffect(()=>{
  //   console.log(userData);
  // },[])
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value});
  }
  return (
    <div>Final</div>
  )
}

export default Final