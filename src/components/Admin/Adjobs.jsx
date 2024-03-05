import React from 'react'
import Adminnav from './Adminnav'

const Adjobs = () => {
  return (
    <>
     <Adminnav/>
     <div className='max-sm:px-5 '>
        <h1 className='text-center text-5xl max-sm:text-3xl mb-20 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>Add New Job/Internship</h1>
    <div className='w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mb-20'>
       <form action="/">
        <div>
            <h1 className='mb-2'>Job title</h1>
        <input className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='job title' type="text" />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Description</h1> 
        <input className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" />
        </div>
        <div className='flex mt-5 justify-between items-center'> 
        <div>
        <input type="checkbox" name="" id="" />
        <label className='ps-2' htmlFor="Job">Job</label>
        </div>
        <div>
        <input type="checkbox" name="" id="" />
        <label className='ps-2' htmlFor="Job">Internship</label>
        </div>
        </div>
        <button className='mt-5 w-full border border-social_right py-2 rounded-xl hover:bg-social_right duration-300 hover:text-white font-semibold'>ADD JOB</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default Adjobs