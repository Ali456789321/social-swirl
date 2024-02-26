import React from 'react'
// import review from "../images/review.jpg"
import vector from "../images/vector.jpg"
import student from '../data/students'
import students2 from '../data/students2'

const Student = () => {
  return (
    <div>
        <h1 className='w-6/12 max-sm:w-full m-auto text-5xl text-center my-40 max-sm:mt-40 mb-20 max-sm:mb-10 max-sm:text-3xl font-semibold'>
            <span className='text-social_right'>500+</span>
            have already transformed their lives
        </h1>
        {/* <img src={review} className='max-sm:mt-10' alt="" /> */}

        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-10'>
          {
            student.map(item => (
              <div className='bg-white py-5 px-5 rounded-2xl max-sm:m-auto max-sm:w-10/12' key={item.id}>
              <div className='flex gap-5'>
                <img className='w-11 h-11 rounded-full' src={vector} alt="" />
                <div>
                <h1 className='font-medium'>{item.name}</h1>
                <h2 className='text-social_right font-medium'>Student</h2>
                </div>
              </div>
              <p className='text-sm pt-2'>{item.para}</p>
            </div>
            ))
          }
        
        </div>

        <h1 className='w-6/12 max-sm:w-full m-auto text-5xl text-center mt-40 max-sm:mt-40 mb-10 max-sm:mb-0 max-sm:text-3xl font-semibold'><span className='text-social_right'>Numbers </span>that speak for themselves</h1>
        <div className='flex justify-center gap-10 max-sm:mt-5 mb-5'>
            <div>
            <h2 className='text-4xl font-bold'>27K+</h2>
            <h3>Students Enrolled</h3>
            </div>
            <div>
            <h2 className='text-4xl font-bold'>9.8</h2>
            <h3>Average Rating</h3>
            </div> 
            <div>
            <h2 className='text-4xl font-bold'>86%</h2>
            <h3>Completion Rate</h3>
            </div>
        </div>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-10'>
        {
            students2.map(item => (
              <div className='bg-black py-5 px-5 rounded-2xl max-sm:w-10/12 max-sm:m-auto' key={item.id}>
              <div className='flex gap-5'>
                <img className='text-white w-11 h-11 rounded-full' src={vector} alt="" />
                <div>
                <h1 className='text-white font-medium'>{item.name}</h1>
                <h2 className='text-social_right font-medium'>Student</h2>
                </div>
              </div>
              <p className='text-sm pt-2 text-white'>{item.para}</p>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Student