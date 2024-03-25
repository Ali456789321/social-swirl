import React, { useEffect } from 'react'
import Adminnav from './Adminnav'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCourse, showCourse } from '../../features/slice'
import { MdDelete, MdEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Courselist = () => {
  const dispatch = useDispatch()
  const { courses, loading } = useSelector(state => state.count)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(showCourse())
  }, [])


  return (
    <>
      <Adminnav />
      <h1 className='text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-20'>Courses List</h1>
      <div className='w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40'>
        <div className='w-full'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className='bg-social_right px-14 py-3 text-white'>Course Title</th>
                <th className='bg-social_right px-14 py-3 text-white'>Description</th>
                <th className='bg-social_right px-14 py-3 text-white'>Duration</th>
                <th className='bg-social_right px-14 py-3 text-white'>Price</th>
              </tr>
            </thead>

            <tbody>
              {
                loading ? (
                  <h1>loading</h1>
                ) :
                  courses.map(item => (
                    <tr className='bg-white border border-b-gray-300'>
                      <td className='text-sm py-5 ps-5'>{item.title}</td>
                      <td className='text-sm py-5 ps-5 text-center'>{item.outline + " "}</td>
                      <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                      <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
                      <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                        <MdEdit onClick={() => navigate(`/courseupdate/${item.id}`)} className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                        <MdDelete onClick={() => [dispatch(deleteCourse(item.id)), navigate('/e-learning')]} className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                      </td>
                    </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>



    </>
  )
}

export default Courselist