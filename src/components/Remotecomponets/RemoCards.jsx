import React, { useEffect } from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from '../../features/slice';

const RemoCards = () => {

    const { jobs, loading } = useSelector((state) => state.count)
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(showUser())
    }, [])

    return (
        <>
            <div className='grid grid-cols-3 gap-10 max-sm:grid-cols-1'>
                {
                    jobs.map(item => (
                        <>
                            <div key={item.id} className="p-2 w-96 max-sm:w-full max-sm:m-auto border rounded-lg shadow-black bg-white">
                                <div className='flex flex-col'>
                                    <img className="w-full h-56 max-sm:h-60 shadow-lg rounded-xl" src={item.img} alt="Bonnie image" />
                                    <h5 className="mt-2 mb-1 text-xl font-medium max-sm:ms-2">{item.job}</h5>
                                    <div className='flex gap-5'>
                                        <span className="text-sm text-gray-700 max-sm:ms-2">{item.desc}</span>
                                        <div className='flex items-center text-sm'>
                                            <IoLocationOutline />
                                            <span className=" text-gray-700">Pakistan Lahore</span>
                                        </div>
                                    </div>
                                    <div className="pt-5 ">
                                        {
                                            item.skills.map(skill => (
                                                <>
                                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 max-sm:mb-8">{skill}</span>
                                                </>
                                            ))
                                        }
                                    </div>
                                    <div className="flex gap-5 md:mt-6 max-sm:mb-2">
                                        <NavLink to={`/remote/${item.id}`} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</NavLink>
                                        <NavLink to='/apply' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Apply Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                }
                
            </div>
            <div className='text-center'>
                    <button onClick={() => navigate('/all-jobs')} className='py-3 px-5 rounded-md mt-10 text-white bg-gradient-to-r from-social_left to-social_right'>Read More</button>
                </div>
        </>
    )
}

export default RemoCards