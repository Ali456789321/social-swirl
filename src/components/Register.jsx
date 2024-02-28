import React from 'react'
import { useParams } from 'react-router-dom'
import { MdOutlinePayments } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";



const Register = () => {
    const { course } = useParams()
    console.log(course);

    return (
        <>
        <div className='pt-40 w-10/12 max-sm:w-full m-auto max-sm:px-2'>
            <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-24'>
                <div className='bg-gradient-to-r socia from-social_left to-social_right rounded-3xl p-1'>
                    <div className='bg-white max-sm:px-5 max-sm:py-5 px-16 py-12 rounded-3xl'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 items-center'>
                                <MdOutlinePayments size={'40px'} className='text-gray-400' />
                                <span className='font-medium text-xl'>Fee</span>
                            </div>
                            <h4 className='text-2xl font-semibold'>PKR 30,000</h4>
                        </div>
                        <hr  className='mt-10 max-sm:mt-5'/>
                        <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-5 max-sm:gap-2 mt-10 max-sm:mt-5'>
                       <div className='border border-gray-300 px-2 text-center py-5'>
                         <h1 className='font-medium'>1 Hour</h1>  
                         <h1 className='text-sm'>Class Duration</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>1 Hour</h1>  
                         <h1 className='text-sm'>Practice</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>1 hour</h1>  
                         <h1 className='text-sm'>3 Days a Week</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 text-center py-5'>
                         <h1 className='font-medium'>3 Months</h1>  
                         <h1 className='text-sm mt-2'>Training Duration</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>Training type</h1>  
                         <h1 className='text-sm mt-2'>Online(ZOOM)</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>Lecture Recording</h1>  
                         <h1 className='text-sm'>Available</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>Trainer</h1>  
                         <h1 className='text-sm mt-2'>Industry Expert</h1>
                       </div>  
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>Completion</h1>  
                         <h1 className='text-sm mt-2'>Certificate</h1>
                       </div> 
                       <div className='border border-gray-300 px-2 py-5 text-center'>
                         <h1 className='font-medium'>Internship Opprtunity</h1>  
                         <h1 className='text-sm'>Bright Students</h1>
                       </div>
                    </div>
                    <h1 className='text-2xl font-medium text-center mt-14 max-sm:mt-8'>Call/Whatsapp</h1> 
                       <button className='bg-green-500 flex items-center px-5 py-2 m-auto rounded-md mt-2'>
                         <IoLogoWhatsapp className='pe-2' size={'26px'}/>
                         <span className='text-white'>2323-4343545</span>
                       </button>
                    </div>
                </div>
                
                <div className='bg-gradient-to-r from-social_left to-social_right rounded-3xl p-1'>
                <div className='bg-white rounded-3xl px-8 max-sm:pt-5 py-5'>
                    <h1 className=''>Your Name:</h1>
                   <input className='max-sm:w-full mt-3 outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Your Email:</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Your Address</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Phone Number:</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Your State/Province</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Your Zip/Postal Code</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <h1 className='mt-7'>Your Country:</h1>
                   <input className='max-sm:w-full outline-none bg-gray-100 py-1 ps-3 border border-gray-200 pe-64 max-sm:pe-0' type="text" />
                   <div className='text-center pt-7'>
                   <button className='rounded-xl text-white bg-gradient-to-r from-social_left to-social_right px-5 py-3'>Register Now</button>
                   </div>  
                </div>
                </div>     
            </div>
        </div>

        <div className='bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 mt-40 max-sm:mt-20'>
    <div className='text-white max-sm:text-center'>
    <h1 className='text-3xl'>
      Start a Project with us Today
    </h1>
    <h2 className='text-lg'>Call us now to schedule as online appointment and get your project successfully completed</h2>
    </div>
    <button className='bg-gradient-to-r from-social_left to-social_right text-white py-3 px-7 rounded-lg'>Get Started</button>
  </div>
        </>
    )
}

export default Register