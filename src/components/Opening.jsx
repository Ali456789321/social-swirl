import React from 'react'
import { GrCertificate } from "react-icons/gr";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { MdWorkOutline } from "react-icons/md";


const Opening = () => {
  return (
    <>
     <div className='w-10/12 m-auto py-40'>
        <div className="grid grid-cols-3 gap-12 max-sm:grid-cols-1 max-sm:text-center">
            <h1 className='text-4xl font-extrabold'>We ARE OPEN 7 DAYS A WEEK</h1>
            <h2 className='text-lg mx-3 max-sm:m-0'>Take Classes From industry experts in purpose built campuses. Ideoversity is a leading Training Institute in Pakistan</h2>
            <button className='bg-gradient-to-r from-social_left to-social_right w-40 rounded-lg py-4 m-auto text-white'>Book Now</button>
        </div>
        <div className='grid grid-cols-4 mt-10 max-sm:grid-cols-1'>
            <div className='text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl'>
               <GrCertificate className='m-auto text-social_right' size={'30px'}/>
               <h1 className='font-bold pt-3'>Certification</h1>
               <h2 className='text-sm pt-3'>State of the Art Learning Experience with certificate from renown organization</h2>
            </div>

            <div className='text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl'>
               <PiTelevisionSimple className='m-auto text-social_right' size={'30px'}/>
               <h1 className='font-bold pt-3'>Classes</h1>
               <h2 className='text-sm pt-3'>World class Instructors guiding everyone with practical implementation</h2>
            </div>

            <div className='text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl'>
               <MdOutlineGroups className='m-auto text-social_right' size={'30px'}/>
               <h1 className='font-bold pt-3'>Private Groups</h1>
               <h2 className='text-sm pt-3'>Lifetime access to groups that helps you find the right career & opportunity</h2>
            </div>

            <div className='text-center cursor-pointer hover:origin-top certificate w-64 mt-5 max-sm:w-full max-sm:m-auto bg-white py-11 px-5 rounded-xl'>
               <MdWorkOutline className='m-auto text-social_right' size={'30px'}/>
               <h1 className='font-bold pt-3'>Internship</h1>
               <h2 className='text-sm pt-3'>This is designed to enhance interns skills that they need to succeed in their careers.</h2>
            </div>
        </div>
     </div>
    </>
  )
}

export default Opening