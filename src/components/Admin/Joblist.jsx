import React from 'react'
import Adminnav from './Adminnav'

const Joblist = () => {
  return (
    <>
      <Adminnav/>
      <h1 className='text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-20'>Jobs List</h1>
      <div className='w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40'>
  <div className='w-full'>
    <table className='w-full'>
        <thead>
            <tr>
                <th className='bg-social_right px-14 py-3 text-white'>Job Title</th>
                <th className='bg-social_right px-14 py-3 text-white'>Job Type</th>
                <th className='bg-social_right px-14 py-3 text-white'>Job Description</th>
                <th className='bg-social_right px-14 py-3 text-white'>Status</th>
            </tr>
        </thead>

        <tbody>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Intern</td>
                <td className='text-sm py-5 ps-5 text-center'>16k(8+8)3 Months</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Intern</td>
                <td className='text-sm py-5 ps-5 text-center'>16k(8+8)3 Months</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Intern</td>
                <td className='text-sm py-5 ps-5 text-center'>16k(8+8)3 Months</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Intern</td>
                <td className='text-sm py-5 ps-5 text-center'>16k(8+8)3 Months</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
            </tr>
            <tr className='bg-white border border-b-gray-300'>
                <td className='text-sm py-5 ps-5'>Front end Development</td>
                <td className='text-sm py-5 ps-5 text-center'>Intern</td>
                <td className='text-sm py-5 ps-5 text-center'>16k(8+8)3 Months</td>
                <td className='text-sm py-5 ps-5 text-center font-semibold text-green-400'>Completed</td>
            </tr>
        </tbody>
    </table>
    {/* <div className='grid grid-cols-4'>
      <div className='text-center text-white bg-social_right py-2 px-6'>
        <h1>Job Title</h1>
      </div>
      <div className='text-center text-white bg-social_right py-2 px-'>
        <h1>Job Type</h1>
      </div>
      <div className='text-center text-white bg-social_right py-2 px-'>
        <h1>Job Description</h1>
      </div>
      <div className='text-center text-white bg-social_right py-2 px-'>
        <h1>Status</h1>
      </div>
    </div> */}
  </div>
</div>



    </>
  )
}

export default Joblist