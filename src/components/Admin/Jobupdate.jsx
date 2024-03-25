import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminnav from './Adminnav';
import { useDispatch, useSelector } from 'react-redux';
import {  showUser, updateJob } from '../../features/slice';

const Jobupdate = () => {

    const [update, setUpdate] = useState()
    const {name} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {jobs} = useSelector(state => state.count)

    useEffect(() => {
       dispatch(showUser())
    },[])

    useEffect(() => {
        const single = jobs.find(ele => ele.id === name)
        setUpdate(single)
        console.log(single);
     },[jobs])

     const pattern = /\d+/

    const changeValue = (e) => {
        const {name,value} = e.target
        setUpdate((prevUp) => {
            return {...prevUp, [name]: value}
        })
        if(name.startsWith("skills")) {
            setUpdate(() => {
                const index = parseInt(name.match(pattern)[0], 10)
                const skill = [...update.skills]
                skill[index - 1] = value
                return {...update, skills:skill}
            })
        } else if(name.startsWith("qualifications")){
            setUpdate(() => {
                const index = parseInt(name.match(pattern)[0], 10)
                const skill = [...update.qualifications]
                skill[index - 1] = value
                return {...update, qualifications:skill}
            })
        } else {
            setUpdate(() =>  ({...update, [name]: value}))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateJob(update))
        navigate('/remote')
    }
  return (
    <>
     <Adminnav/>
     <div className='max-sm:px-5 '>
        <h1 className='text-center text-5xl max-sm:text-3xl mb-36 pb-6 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>Update Job/Internship</h1>
    <div className='w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mt-20'>
       <form action="/" onSubmit={handleSubmit}>
        <div>
            <h1 className='mb-2'>Job title</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='title' value={update && update.title} placeholder='job title' type="text" />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Description</h1> 
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='description' value={update && update.description} placeholder='Description' type="text" />
        </div>
        <div>
            <h1 className='mt-8'>skills</h1>
            <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills1'
            value={update && update.skills[0]}
            placeholder='Enter skill 1'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills2'
            value={update && update.skills[1]}
            placeholder='Enter skill 2'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='skills3'
            value={update && update.skills[2]}
            placeholder='Enter skill 3'
            type="text"
          />
           <h1 className='mt-8'>qualifications</h1>
            <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications1'
            value={update && update.qualifications[0]}
            placeholder='Enter qualification 1'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications2'
            value={update && update.qualifications[1]}
            placeholder='Enter qualification 2'
            type="text"
          />
          <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications3'
            value={update && update.qualifications[2]}
            placeholder='Enter qualification 3'
            type="text"
          />
           <input
            onChange={changeValue}
            className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none mt-2'
            name='qualifications4'
            value={update && update.qualifications[3]}
            placeholder='Enter qualification4'
            type="text"
          />
           <h1 className='mb-2 mt-4'>Image Url</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='img' value={update && update.img} placeholder='Add image url' type="text" />
       
        <h1 className='mb-2 mt-4'>Issue Date</h1>
        <input onChange={changeValue} className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' name='issuedate' value={update && update.issuedate} placeholder='Issue Date' type="text" />  

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
        <button className='mt-5 w-full border border-social_right py-2 rounded-xl hover:bg-social_right duration-300 hover:text-white font-semibold'>Edit JOB</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default Jobupdate