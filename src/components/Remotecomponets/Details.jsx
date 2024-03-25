import React, { useEffect, useState } from 'react'
import jobs from '../../data/jobs'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { showUser } from '../../features/slice'

const Details = () => {
  const [job, setJob]= useState() 
  const {jobs} = useSelector(state => state.count) 
  const {id} = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(showUser())
  },[])
  
  useEffect(() => {
        const single = jobs.filter(ele => ele.id === id)
        setJob(single[0])
  }, [jobs])

  console.log(job);
 

  return (
    <>
    
     <div className='w-10/12 m-auto pt-40'>
        <h1 className='text-6xl max-sm:text-4xl text-center font-normal mt-20'>{job && job.title}</h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 mt-20">
        {
            job ? (
              <>
                     <div>
        <h2 className='font-medium '>
          {job.description}
        </h2>
          {/* RESPONSIBILITIES */}
        <div className='mt-10'>
            <h1 className='text-lg font-bold'>#Responsibilities</h1>
            {
  job.skills.map((ele) => (
    <div className='flex'>
      <span className='font-extrabold text-xl'>.</span>
      <h2 className='text-base mt-2 ps-2'>{ele}</h2>
    </div>
  ))
}     
        </div>
    
        <div className='mt-10'>
            <h1 className='text-lg font-bold'>#Qualifications</h1>
             {/* QUALIFICATIONS */}
         {
          job.qualifications.map(ele => (
            <>
               <div className='flex'>
            <span className='font-extrabold text-xl'>.</span>
            <h2 className='text-base mt-2 ps-2'>{ele}</h2>
            </div>
            </>
          ))
         }
        </div>

        </div>
         <div>
            <img className='h-80 w-10/12 m-auto rounded-3xl mt-10' src={job.img} alt="" />
            <div className='rounded-3xl bg-white p-3 text-center w-10/12 m-auto mt-5'>
                <button className='py-5 px-8 rounded-xl text-white bg-gradient-to-r from-social_left to-social_right'>Apply Now</button>
            </div>
         </div>
              </>
            ) : <h1>Waiting for jobs</h1>
          }
        </div>
     </div>
     <div className='bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 max-sm:mt-20 mt-40'>
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

export default Details