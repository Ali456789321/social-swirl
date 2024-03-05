import React from 'react'
import person from "../../images/person.jpg"
import { NavLink } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";


const Adminnav = () => {
  return (
    <>
    <div className='pt-40'>
    <div className='w-10/12 m-auto flex justify-center items-center gap-7'>
        <div className='dashboard'>
        <NavLink className="flex items-center gap-2">
            <MdDashboard/>
            <h1>Dashboard</h1>
        </NavLink>
        <div className='dash_jobs border rounded-lg border-gray-300 bg-white absolute z-10'>
            <NavLink to="/ad-jobs">
            <h1 className='border hover:bg-social_right hover:text-white border-gray-200 py-3 ps-2 pe-14'>AddJob/Internship</h1>
            </NavLink>
           
            <NavLink to="/ad-course">
            <h1 className='border  hover:bg-social_right hover:text-white border-gray-200 py-3 ps-2 pe-14'>Add New Course</h1>
            </NavLink>
           
            <NavLink>
            <h1 className='border  hover:bg-social_right hover:text-white border-gray-200 py-3 ps-2 pe-14'>Job/Internship list</h1>
            </NavLink>
           
            <NavLink>
            <h1 className='border  hover:bg-social_right hover:text-white border-gray-200 py-3 ps-2 pe-14'>Courses List</h1>
            </NavLink>
        </div>
        </div>
        <div className='careers'>
        <NavLink className="flex items-center gap-2">
            <IoMdPerson/>
            <h1>Careers</h1>
        </NavLink>
        <div className='job_careers border rounded-lg border-gray-300 bg-white absolute z-10'>
            <NavLink>
            <h1 className='border  hover:bg-social_right hover:text-white border-gray-200 py-2 ps-2 pe-14'>Job</h1>
            </NavLink>
           
            <NavLink>
            <h1 className='border  hover:bg-social_right hover:text-white border-gray-200 py-2 ps-2 pe-14'>Internship</h1>
            </NavLink>
        </div>
        </div>
        <img className='w-11 h-11 rounded-full' src={person} alt="" />
     </div>
    </div>
    </>
  )
}

export default Adminnav