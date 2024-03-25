import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import { useDispatch, useSelector } from 'react-redux'
import { addCourse, showCourse } from '../../features/slice'
import { useNavigate } from 'react-router-dom'

const Adcourse = () => {
 
   const [requirments, setrequirments] = useState({
      requirments:[],
      features:[],
      outline:[]
   }
   )

  const {courses} = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    dispatch(showCourse())
  },[])

  const pattern = /\d+/

  const testing = (e) => {
     const {name,value} = e.target
   //   console.log(name);
   if(name.startsWith("requirments")) {
   
      const index = parseInt(name.match(pattern)[0], 10)
      console.log(index);
      setrequirments((prevRequi) => {
         const newAdding = [...prevRequi.requirments]
         newAdding[index - 1] = value
       return {...prevRequi, requirments:newAdding}
   })
   } else if(name.startsWith("features")) {
      const index = parseInt(name.match(pattern)[0], 10)
      console.log(index);
      setrequirments((prevRequi) => {
         const newAdding = [...prevRequi.features]
         newAdding[index - 1] = value
       return {...prevRequi, features:newAdding}
   })
   }else if(name.startsWith("outline")) {
      const index = parseInt(name.match(pattern)[0], 10)
      console.log(index);
      setrequirments((prevRequi) => {
         const newAdding = [...prevRequi.outline]
         newAdding[index - 1] = value
       return {...prevRequi, outline:newAdding}
   })
   } else {
      setrequirments((prevRequi) => {
    return {...prevRequi, [name]:value}
})
}
  }

  const handlesubmit = (e) => {
   e.preventDefault()
     dispatch(addCourse(requirments))
     navigate("/e-learning")
     console.log(courses);
  }

  console.log(requirments);

//   console.log(courses);

  return (
    <>
     <Adminnav/>
     <div className='max-sm:px-5 '>
        <h1 className='text-center text-5xl max-sm:text-3xl mb-20 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>Add New Course</h1>
    <div className='w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mb-20'>
       <form action="/" onSubmit={handlesubmit}>
        <div>
            <h1 className='mb-2'>Job title</h1>
        <input name='title' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='title' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Description</h1> 
        <input name='description' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Requirments</h1> 
        <input name='requirments1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments1' type="text" onChange={testing} />
        <input name='requirments2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments2' type="text" onChange={testing} />
        <input name='requirments3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments3' type="text" onChange={testing} />
        <input name='requirments4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add features</h1> 
        <input name='features1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features1' type="text" onChange={testing} />
        <input name='features2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features2' type="text" onChange={testing} />
        <input name='features3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features3' type="text" onChange={testing} />
        <input name='features4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add outline</h1> 
        <input name='outline1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline1' type="text" onChange={testing} />
        <input name='outline2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline2' type="text" onChange={testing} />
        <input name='outline3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline3' type="text" onChange={testing} />
        <input name='outline4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add course review</h1> 
        <input name='review' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing}/>
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Url</h1> 
        <input name='img' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing}/>
        </div>
        <button className='mt-5 w-full border border-social_right py-2 rounded-xl hover:bg-social_right duration-300 hover:text-white font-semibold'>ADD COURSE</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default Adcourse