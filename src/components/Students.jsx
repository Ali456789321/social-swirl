import React from 'react'
import review from "../images/review.jpg"
import review2 from "../images/review2.jpg"

const Student = () => {
  return (
    <div>
        <h1 className='w-6/12 max-sm:w-full m-auto text-5xl text-center my-40 max-sm:mt-40 mb-20 max-sm:mb-0 max-sm:text-3xl font-semibold'>
            <span className='text-social_right'>500+</span>
            have already transformed their lives
        </h1>
        <img src={review} className='max-sm:mt-10' alt="" />

        <h1 className='w-6/12 max-sm:w-full m-auto text-5xl text-center mt-40 max-sm:mt-40 mb-10 max-sm:mb-0 max-sm:text-3xl font-semibold'><span className='text-social_right'>Numbers </span>that speak for themselves</h1>
        <div className='flex justify-center gap-10 max-sm:mt-5'>
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
        <img className='mt-10' src={review2} alt="" />
    </div>
  )
}

export default Student