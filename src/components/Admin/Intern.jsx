import React from 'react'
import Adminnav from './Adminnav'
import { IoMdSend } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosMore } from "react-icons/io";

const Intern = () => {
  return (
    <>
    <Adminnav />
    <h1 className='text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-10'>Intern Table</h1>
    <div className='w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40'>
        <div className='text-center mb-20'>
            <input className='m-auto bg-gray-100 py-1 ps-2 pe-6 rounded-md' placeholder='search job' type="text" />
        </div>

        <div className='flex justify-between max-sm:flex-col max-sm:gap-5 mb-10'>
            <div>
                <select className='py-3 px-5 border border-white rounded-lg' id="cars">
                    <option value="volvo">Option 1</option>
                    <option value="saab">Option 2</option>
                </select>
                <select className='py-3 ms-3 px-5 border border-white rounded-lg' id="cars">
                    <option value="volvo">Option 1</option>
                    <option value="saab">Option 2</option>
                </select>
                <button className='text-blue-400 max-sm:mt-5 bg-white py-3 px-8 ms-2 rounded-lg'>Filters</button>
            </div>
            <div>
            <button className='text-blue-400 bg-white py-3 px-8 ms-2 rounded-lg me-2'>ADD</button>
                <select className='py-3 px-5 border border-white rounded-lg' id="cars">
                    <option value="volvo">Option 1</option>
                    <option value="saab">Option 2</option>
                </select>
            </div>
        </div>

        <div className='w-full'>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='px-14 py-3'>Job Title</th>
                        <th className='px-14 py-3'>Description</th>
                        <th className='px-14 py-3'>Job Issue Date</th>
                        <th className='px-14 py-3'>Job Status</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className='bg-white border border-b-gray-300'>
                        <td className='text-sm py-5 ps-5 flex items-center'>
                            <input type="checkbox" name="" id="" />
                            <h1 className='ps-5'>Front end Development</h1>
                        </td>
                        <td className='text-sm py-5 ps-5 text-center'>lori@example</td>
                        <td className='text-sm py-5 ps-5 text-center'>2024-1-27</td>
                        <td className='text-sm py-5 ps-5 text-center font-semibold text-blue-400'>Active</td>
                        <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                            <IoMdSend className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdEdit className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdDelete className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <IoIosMore className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                        </td>
                    </tr>
                    <tr className='bg-white border border-b-gray-300'>
                        <td className='text-sm py-5 ps-5 flex items-center'>
                            <input type="checkbox" name="" id="" />
                            <h1 className='ps-5'>Graphic Designer</h1>
                        </td>
                        <td className='text-sm py-5 ps-5 text-center'>lori@example</td>
                        <td className='text-sm py-5 ps-5 text-center'>2024-1-27</td>
                        <td className='text-sm py-5 ps-5 text-center font-semibold text-blue-400'>Closed</td>
                        <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                            <IoMdSend className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdEdit className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdDelete className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <IoIosMore className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                        </td>
                    </tr>
                    <tr className='bg-white border border-b-gray-300'>
                        <td className='text-sm py-5 ps-5 flex items-center'>
                            <input type="checkbox" name="" id="" />
                            <h1 className='ps-5'>SEO</h1>
                        </td>
                        <td className='text-sm py-5 ps-5 text-center'>lori@example</td>
                        <td className='text-sm py-5 ps-5 text-center'>2024-1-27</td>
                        <td className='text-sm py-5 ps-5 text-center font-semibold text-blue-400'>Active</td>
                        <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                            <IoMdSend className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdEdit className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdDelete className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <IoIosMore className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                        </td>
                    </tr>
                    <tr className='bg-white border border-b-gray-300'>
                        <td className='text-sm py-5 ps-5 flex items-center'>
                            <input type="checkbox" name="" id="" />
                            <h1 className='ps-5'>Back-end Developer</h1>
                        </td>
                        <td className='text-sm py-5 ps-5 text-center'>lori@example</td>
                        <td className='text-sm py-5 ps-5 text-center'>2024-1-27</td>
                        <td className='text-sm py-5 ps-5 text-center font-semibold text-blue-400'>Closed</td>
                        <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                            <IoMdSend className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdEdit className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <MdDelete className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                            <IoIosMore className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>



</>
  )
}

export default Intern