import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import PersonalDetails from './steps/PersonalDetails';
import AddressDetails from './steps/AddressDetails';
import EducationDetails from './steps/EducationDetails';
import Attachments from './steps/Attachments';
import Final from './steps/Final';
import { StepperContext } from './contexts/StepperContext';

const Form = () => {

    const[currentStep,setCurrentStep]=useState(1);
    const [userData,setUserData]=useState('');
    const [finalData,setFinalData]=useState([]);

    const steps=[
        "Personal details",
        "Address Details",
        "eductional Details",
        "Attachments",
        "Final"
    ];

    const handleClick=(direction)=>{
        let newStep=currentStep;
        direction==="next"?newStep++:newStep--;
        newStep>0 && newStep<=steps.length && setCurrentStep(newStep);
    }

    const displaySteps=(step)=>{
        switch(step){
            case 1:
                return <PersonalDetails/>
            case 2:
                return <AddressDetails/>
            case 3:
                return <EducationDetails/>
            case 4:
                return <Attachments/>
            case 5:
                return<Final/>
        }
    }
  return (
    <div>
        <div>
            <Stepper
                steps={steps}
                currentStep={currentStep}
            />
            <div className=' my-10 p-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displaySteps(currentStep)}
                </StepperContext.Provider>
            </div>
        </div>
        <div>
            <StepperControl
                handleClick={handleClick}
                currentStep={currentStep}
                steps={steps}
            />
        </div>
        
    </div>
  )
}

export default Form