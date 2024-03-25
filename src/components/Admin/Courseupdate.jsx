import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Adminnav from './Adminnav'
import { useDispatch, useSelector } from 'react-redux'
import { showCourse, updateCourse } from '../../features/slice'

const Courseupdate = () => {
  const [update, setUpdate] = useState()
  const {name} = useParams()
  const {courses, loading} = useSelector(state => state.count)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(showCourse())
  },[])

  useEffect(() => {
    setUpdate(() => {
      const updating = courses.find(ele => ele.id === name)
      return updating
    })
  },[courses])


  const pattern = /\d+/

  const testing = (e) => {
    const {name, value} = e.target
    if(name.startsWith("outline")) {
      setUpdate(() => {
        const index = parseInt(name.match(pattern)[0], 10)
        const outval = [...update.outline]
        outval[index - 1] = value
        return {...update, outline: outval}
      })
    } else if (name.startsWith("requirments")) {
      setUpdate(() => {
        const index = parseInt(name.match(pattern)[0], 10)
        const requirval = [...update.requirments]
        requirval[index - 1] = value
        return {...update, requirments: requirval}
      })
    } else if (name.startsWith("features")) {
      setUpdate(() => {
        const index = parseInt(name.match(pattern)[0], 10)
        const featval = [...update.features]
        featval[index - 1] = value
        return {...update, features: featval}
      })
    }
    else {
      setUpdate(() => 
      ({...update, [name]:value})
    )
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateCourse(update))
    navigate('/e-learning')
  }
  console.log(update);

  return (
    <>
     <Adminnav/>
     <div className='max-sm:px-5 '>
        <h1 className='text-center text-5xl max-sm:text-3xl mb-20 mt-10 font-bold  bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>Add New Course</h1>
    <div className='w-5/12 max-sm:w-full bg-white m-auto rounded-2xl py-7 px-10 max-sm:px-5 mb-20'>
       <form action="/" onSubmit={handleSubmit}>
        <div>
            <h1 className='mb-2'>Job title</h1>
        <input value={update && update.title} name='title' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='title' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Description</h1> 
        <input value={update && update.description} name='description' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Requirments</h1> 
        <input value={update && update.requirments[0]} name='requirments1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments1' type="text" onChange={testing} />
        <input value={update && update.requirments[1]} name='requirments2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments2' type="text" onChange={testing} />
        <input value={update && update.requirments[2]} name='requirments3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments3' type="text" onChange={testing} />
        <input value={update && update.requirments[3]} name='requirments4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='requirments4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add features</h1> 
        <input  value={update && update.features[0]} name='features1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features1' type="text" onChange={testing} />
        <input  value={update && update.features[1]} name='features2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features2' type="text" onChange={testing} />
        <input  value={update && update.features[2]} name='features3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features3' type="text" onChange={testing} />
        <input  value={update && update.features[3]} name='features4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='features4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add outline</h1> 
        <input  value={update && update.outline[0]} name='outline1' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline1' type="text" onChange={testing} />
        <input  value={update && update.outline[1]} name='outline2' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline2' type="text" onChange={testing} />
        <input  value={update && update.outline[2]} name='outline3' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline3' type="text" onChange={testing} />
        <input  value={update && update.outline[3]} name='outline4' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='outline4' type="text" onChange={testing} />
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add course review</h1> 
        <input value={update && update.review} name='review' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing}/>
        </div>
        <div className='mt-8'>
           <h1 className='mb-2'>Add Url</h1> 
        <input value={update && update.img} name='img' className='border rounded-md border-gray-200 w-full py-1 ps-2 outline-none' placeholder='Description' type="text" onChange={testing}/>
        </div>
        <button className='mt-5 w-full border border-social_right py-2 rounded-xl hover:bg-social_right duration-300 hover:text-white font-semibold'>EDIT COURSE</button>
       </form>
     </div>
    </div>
    </>
  )
}

export default Courseupdate