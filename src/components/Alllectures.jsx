import React, { useEffect } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { Link } from 'react-router-dom'
import img2 from "../images/person.jpg"
import { useDispatch, useSelector } from 'react-redux'
import { showCourse } from '../features/slice'

const AllLectures = () => {

  const {courses, loading} = useSelector(state => state.count)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showCourse())
  },[])

  console.log(courses);

  return (
    <>
      <div className='pt-40 mb-40 w-10/12 max-sm:w-full m-auto'>
      <h1 className='text-center text-5xl max-sm:text-3xl font-medium mb-20'>All Courses</h1>
       <div className='grid gap-20 grid-cols-3 max-sm:grid-cols-1 max-sm:mx-auto'>
        {
          loading ? (
            <h1>loading</h1>
          ) : 
          (
            courses.map((item) => (
              <Link to={`/selectedCourse/${item.id}`}>
                 <div key={item.id} class="bg-white max-w-sm rounded overflow-hidden shadow-lg max-sm:m-auto">
              <img className="w-full h-60" src={item.img} alt="Sunset in the mountains"/>
               <div className='flex pt-8 ps-3'>
                   <img src={img2} className='w-11 h-11  rounded-full' alt="" />
                   <div className='ps-3'>
                     <h1 className='font-medium'>Waleed</h1>
                     <h5 className='opacity-80 font-thin'>{item.title}</h5>
                   </div>
               </div>
               <div className='pt-5 flex items-center ps-5'>
               <h1 className='font-medium'>{item.title}</h1>
               <MdOutlineArrowOutward className='ps-3' size={"30px"}/>
               </div>
             <h6 className='ps-5 font-thin'>Duration 1 to 3 months</h6>
              <div className="px-6 pt-7 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#online</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">certificate</span>
              </div>
            </div>
              </Link>   
            ))
          )
       
      }
    </div>
    </div>
    <div className='mt-40 bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 max-sm:mt-20'>
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

export default AllLectures