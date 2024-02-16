import React from 'react'
import img1 from "../images/remote.jpg"
import RemoCards from './RemoCards'
import Carousel from './Carousel'



const Remote = () => {
  return (
    <>
     <div className='w-10/12 m-auto'>
     <div className='pb-5 gap-7 grid grid-cols-2 max-sm:grid-cols-1 pt-56 max-sm:pt-28'>
      <div className='max-sm:text-center'>
      <h5 className='text-purple-600 font-bold'>Over 50+ employees working </h5>
      <h1 className='text-6xl max-sm:text-4xl font-bold pt-3'>Work with us Remotely</h1>
      <h5 className='mt-6 leading-6'>Work remotely with us and discover many options like  Frontend, Backend, SEO, Human Resource, Graphic Deisgning and Social Media Marketing. Join us to unleash your potential and make a difference</h5>
      <div className='mt-6'>
        <button className='px-5 py-2 rounded-lg bg-purple-600 text-white'>Apply Now</button>
      </div>
      </div>
      <div className='max-sm:mt-5'>
        <img src={img1} className='rounded-tl-full max-sm:rounded-tl-3xl' alt="" />
      </div>
     </div>
     <h1 className='text-6xl max-sm:text-4xl  text-center font-normal my-40'>OFFERED DEPARTMENTS</h1>
     <RemoCards/>
     <h1 className='text-6xl max-sm:text-3xl  text-center font-normal my-40'>CURRENT EMPLOYEES</h1>
     <Carousel/>
     </div>
     <div className='my-40 bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 max-sm:mt-20'>
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

export default Remote