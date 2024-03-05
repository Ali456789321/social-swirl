import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='pt-40 w-10/12 m-auto max-sm:w-full max-sm:px-5 mb-36'>
    <h1 className='text-center text-4xl max-sm:text-3xl font-bold'>Admin Page</h1>
    <div className='w-4/12 mt-20 max-sm:w-full rounded-2xl bg-white py-10 max-sm:px-10 m-auto'>
    <form action="/">
        <div className='text-center flex items-center justify-center w-7/12 max-sm:w-full py-1 rounded-xl bg-gray-200 m-auto'>
        <MdOutlineMailOutline/>    
        <input type="text" className='bg-gray-200 ps-2 outline-none' placeholder='Email'/>
        </div>
        <div className='text-center flex items-center justify-center w-7/12 max-sm:w-full py-1 rounded-xl mt-5 bg-gray-200 m-auto'>
        <RiLockPasswordLine/>   
        <input type="password" className='bg-gray-200 ps-2 outline-none' placeholder='Password' />
        </div>
       <div className='text-center'>
         <NavLink to='/user'>
         <button className='mt-5 bg-gradient-to-r from-social_left to-social_right text-white px-5 py-2 rounded-xl'>Submit</button>
         </NavLink>
       </div>
    </form>
    </div>
    </div>
  )
}

export default Admin