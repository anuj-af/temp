import React, { useState } from 'react'
import avatar from '../../assets/avatar.png';
import { NavLink } from 'react-router-dom';
import dashboardIcon from '../../assets/dashboardIcon.png'
import applicationIcon from '../../assets/application.png'
import docIcon from '../../assets/doc.png'
import helpIcon from '../../assets/help.png'
import aluminiIcon from '../../assets/alumni.png'

const Sidebar = (props) => {

    const [activeLink, setActiveLink] = useState("");


    return (
        <div className='bg-hblue2 text-white w-72 h-screen  border-y border-gray-400 '>
            <div className="flex flex-row gap-2 items-center my-12 py-4 bg-[#4B73A5] w-full px-2">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                        // yaha par auth se userIcon dalna h 
                        src={avatar}
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className=' flex flex-col ml-2'>
                    <span className=" text-lg font-medium text-white">{props.name}</span>
                    <span className="text-xs font-light text-white"> {props.email}</span>
                </div>
            </div>
            <div className=' px-4 text-base font-medium w-full text-white flex flex-col gap-4'>
            <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/docupload/${props.studid}` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={docIcon} alt="" />
                    <NavLink
                        to={`/student/form`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`;
                            isActive ? setActiveLink(`/student/docupload/${props.studid}`) : {}
                        }
                        }
                    >
                        Upload Document
                    </NavLink>
                </div>
                <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/profile/${props.studid}` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={dashboardIcon} alt="" />
                    <NavLink
                        to={`/student/profile/${props.studid}`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`;
                            isActive ? setActiveLink(`/student/profile/${props.studid}`) : {}
                        }
                        }
                    >
                        Profile
                    </NavLink>
                </div>
                <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/dashboard/${props.studid}` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={dashboardIcon} alt="" />
                    <NavLink
                        to={`/student/dashboard/${props.studid}`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`; isActive ? setActiveLink(`/student/dashboard/${props.studid}`) : {}
                        }
                        }
                    >
                        Dashboard
                    </NavLink>
                </div>
                <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/applicationstatus/${props.studid}` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={applicationIcon} alt="" />
                    <NavLink
                        to={`/student/applicationstatus/${props.studid}`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`; isActive ? setActiveLink(`/student/applicationstatus/${props.studid}`) : {}
                        }
                        }
                    >
                        Application Status
                    </NavLink>
                </div>
                <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/help` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={helpIcon} alt="" />
                    <NavLink
                        to={`/student/help`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`; isActive ? setActiveLink(`/student/help`) : {}
                        }
                        }
                    >
                        Helpdesk
                    </NavLink>
                </div>
                <div className={` cursor-pointer flex gap-2 p-2 rounded-md  justify-start items-center ${activeLink === `/student/alumini` ? 'bg-[#4B73A5] w-full' : ''}`}>
                    <img src={aluminiIcon} alt="" />
                    <NavLink
                        to={`/student/alumini`}
                        className={({ isActive }) => {
                            `p-2 rounded-lg transition px-10`; isActive ? setActiveLink(`/student/alumini`) : {}
                        }
                        }
                    >
                        Alumini
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Sidebar