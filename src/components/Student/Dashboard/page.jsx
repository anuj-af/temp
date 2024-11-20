import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../Sidebar';

const Dashboard = () => {
  const { studid } = useParams();

  const handleStatusChange=()=>{
    
  }


  // constant example data

  const studentData=[
    {
      name:"Saloni Mahajan",
      email:"salonnimahajan007@gmail.com",
      appId:"2154521213",
      academicyear:"2023-24",
      institute:"IET DAVV Indore",
      status:"locked"
    },
    {
      name:"Saloni Mahajan",
      email:"salonnimahajan007@gmail.com",
      appId:"77745554613",
      academicyear:"2022-23",
      institute:"IET DAVV Indore",
      status:"Unlocked"
    }
  ]


  return (
    <div className=' flex font-rubik'>
      <div>
        <Sidebar
        name={studentData[0].name}
        email={studentData[0].email}
        studid={studid}
         />
      </div>
      <div className=' flex flex-col items-center mt-16 w-full text-2xl '>
        <h2 className=' text-center border border-hblue2 p-2 rounded-md bg-hblue2 text-white font-medium px-20'> Dashboard For PMSSS Scholarship</h2>

        <div className=' my-10'>
          <table className='bg-white shadow-md rounded-lg border-collapse w-full text-sm font-normal'>
          <thead>
          <tr className="bg-hblue2 text-white ">
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Sno.</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Application ID</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Academic Year</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Institute Name</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Status</th>
            <th className="py-2 px-4 text-left border-r-2 border-slate-400 font-medium">Lock/Unlock</th>
            <th className="py-2 px-4 text-center">Print</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((data, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-blue-50" : "bg-white"
              } text-gray-800`}
            >
              <td className="py-2 px-4 border-r-2 border-slate-300">{index+1}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{data.appId}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{data.academicyear}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{data.institute}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300">{data.status}</td>
              <td className="py-2 px-4 border-r-2 border-slate-300 text-center">{data.status==="locked"?(<button className="bg-hblue2 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                  Unlock
                </button>):(<button className="bg-hblue2 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                  Lock
                </button>)}</td>
              <td className="py-2 px-4 text-center">
                <button className="bg-hblue2 text-white px-4 py-1 rounded-md hover:bg-blue-700">
                  print
                </button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Dashboard