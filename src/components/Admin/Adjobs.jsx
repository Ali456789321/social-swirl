import React, { useState } from 'react'
import Adminnav from './Adminnav'
import { useDispatch } from 'react-redux'
import { createUser } from '../../features/slice';
import { useNavigate } from 'react-router-dom';

const Adjobs = () => {
  const [job, setJob] = useState({
    skills: [],
    qualifications: []
  });

  const navigate = useNavigate()

  const dispatch = useDispatch();
  const pattern = /\d+/

  const changeValue = (e) => {
    const { name, value } = e.target;
  
    if (name.startsWith("skills")) {
      const index = parseInt(name.match(pattern)[0], 10);
      setJob((prevJob) => {
        const newSkills = [...prevJob.skills];
        newSkills[index - 1] = value;
        return { ...prevJob, skills: newSkills };
      });
    } else if(name.startsWith("qualifications")){
      const index = parseInt(name.match(pattern)[0], 10);
      setJob((prevJob) => {
        const Qualifications = [...prevJob.qualifications];
        Qualifications[index - 1] = value;
        return { ...prevJob, qualifications: Qualifications };
      });
    }
     else {
      setJob((prevJob) => {
      return  {...prevJob, [name]: value}
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Job:', job);
    console.log(job);
    dispatch(createUser(job))
    navigate('/remote')
  };


  return (
    <>
     <Adminnav/>
     <div className='max-sm:px-5 '>
        <h1 className='text-center text-5xl max-sm:text-3xl mb-20 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>Add New Job/Internship</h1>
    <div className='w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mb-20'>
       <form action="/" onSubmit={handleSubmit}>
        <div>
            <h1 className='mb-2'>Job title</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='title' placeholder='job title' type="text" />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Description</h1> 
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='description' placeholder='Description' type="text" />
        </div>
        <div>
            <h1 className='mt-8'>skills</h1>
            <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills1'
            placeholder='Enter skill 1'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills2'
            placeholder='Enter skill 2'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills3'
            placeholder='Enter skill 3'
            type="text"
          />
           <h1 className='mt-8'>qualifications</h1>
            <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications1'
            placeholder='Enter qualification 1'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications2'
            placeholder='Enter qualification 2'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications3'
            placeholder='Enter qualification 3'
            type="text"
          />
           <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications4'
            placeholder='Enter qualification4'
            type="text"
          />
           <h1 className='mb-2 mt-4'>Image Url</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='img' placeholder='Add image url' type="text" />
       
        <h1 className='mb-2 mt-4'>Issue Date</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='issuedate' placeholder='Issue Date' type="text" />  

        </div>
        <div className='flex mt-5 justify-between items-center'> 
        <div>
        <input onChange={changeValue} type="checkbox" name="type" value="job" id="" />
        <label className='ps-2' htmlFor="Job">Job</label>
        </div>
        <div>
        <input onChange={changeValue} type="checkbox" value="internship" name="type" id="" />
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