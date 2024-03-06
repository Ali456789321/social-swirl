import React from 'react'
import Adminnav from './Adminnav'

const Courselist = () => {
  return (
    <>
      <Adminnav/>
      <h1 className='text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-20'>Courses List</h1>
      <div className='w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40'>
  <div className='w-full'>
    <table className='w-full'>
        <thead>
            <tr>
                <th className='bg-social_right px-14 py-3 text-white'>Course Title</th>
                <th className='bg-social_right px-14 py-3 text-white'>Category</th>
                <th className='bg-social_right px-14 py-3 text-white'>Description</th>
                <th className='bg-social_right px-14 py-3 text-white'>Status</th>
                <th className='bg-social_right px-14 py-3 text-white'>Duration</th>
                <th className='bg-social_right px-14 py-3 text-white'>Price</th>
            </tr>
        </thead>

        <tbody>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Web-Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Html,Css,Js,React</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
                <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Web-Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Html,Css,Js,React</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
                <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Web-Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Html,Css,Js,React</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
                <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Web-Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Html,Css,Js,React</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
                <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Web-Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Html,Css,Js,React</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
                <td className='text-sm py-5 ps-5 text-center'>65 Days</td>
                <td className='text-sm py-5 ps-5 text-center'>$99.00</td>
            </tr>
        </tbody>
    </table>
  </div>
</div>



    </>
  )
}

export default Courselist