import React, { useEffect, useState } from 'react'
import img1 from "../images/backend.jpg"
import jobs from '../data/jobs'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [job, setJob]= useState()  
  const {id} = useParams()
  
  useEffect(() => {
    if(id) {
        const single = jobs.filter(ele => ele.id === +id)
        setJob(single[0])
    }
  }, [])

  console.log(job);
 

  return (
    <>
    
     <div className='w-10/12 m-auto pt-40'>
        <h1 className='text-6xl text-center font-normal mt-20'>{job && job.job}</h1>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 mt-20">
          {
            job && (
              <>
                     <div>
        <h2 className='font-medium '>
          {job.details}
        </h2>
          {/* RESPONSIBILITIES */}
        <div className='mt-10'>
            <h1 className='text-lg font-bold'>#Responsibilities</h1>
            {
  job.responsibilities.map((ele) => (
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
            <img className='h-80 w-10/12 max-sm:w-full m-auto rounded-3xl mt-10' src={job.img} alt="" />
            <div className='rounded-3xl max-sm:bg-transparent bg-white p-3 text-center w-10/12 m-auto mt-5'>
                <button className='py-5 px-8 rounded-xl text-white bg-gradient-to-r from-social_left to-social_right'>Apply Now</button>
            </div>
         </div>
              </>
            ) 
          }
        </div>
       

     </div>
    </>
  )
}

export default Details