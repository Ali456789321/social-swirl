import React, { useEffect, useState } from 'react'
import Adminnav from './Adminnav'
import { IoMdSend } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { deleteJob, showUser } from '../../features/slice';
import { useNavigate } from 'react-router-dom';

const Jobtable = () => {
    const [data, dataFound] = useState('')
    const [checkData, setCheckData] = useState(true)
    const {jobs, loading} = useSelector(state => state.count)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() =>{
       dispatch(showUser())
    }, [])

    useEffect(() => { 
        if(jobs.length > 0) {
            setCheckData(
                jobs.some(ele => {
                    const check = ele.title.toLowerCase().includes(data.toLowerCase())
                    return check
                })
               )
        }
    },[data])

    console.log(checkData);

    const filterData = 
    jobs.filter(ele => ele.type === "job")
    .filter(ele => ele.title.toLowerCase().includes(data.toLowerCase()))
       
    return (
        <>
            <Adminnav />
            <h1 className='text-5xl text-center font-bold bg-gradient-to-r from-social_right to-social_left bg-clip-text text-transparent mt-20 mb-10'>Job Table</h1>
            <div className='w-10/12 max-sm:w-11/12 m-auto max-sm:overflow-x-auto max-sm:px-5 mb-40'>
                <div className='text-center mb-20'>
                    <input className='m-auto bg-gray-100 py-1 ps-2 pe-6 rounded-md' placeholder='search job' type="text" onChange={(e) => dataFound(e.target.value)} />
                </div>
                <div className='w-full'>
                    <table className='w-full'>
                        <thead>
                            <tr>
                                <th className='px-14 py-3'>Job Title</th>
                                <th className='px-14 py-3'>Job Issue Date</th>
                                <th className='px-14 py-3'>Job Status</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                loading ? (
                                    <h1>loading</h1>
                                ) :   
                                      checkData ? (
                                        filterData.map(item => (
                                            <tr className='bg-white border border-b-gray-300' key={item.id}>
                                            <td className='text-sm py-5 ps-5 flex items-center'>
                                                <h1 className='ps-5'>{item.title}</h1>
                                            </td>
                                            <td className='text-sm py-5 ps-5 text-center'>{item.issuedate}</td>
                                            <td className='text-sm py-5 ps-5 text-center font-semibold text-blue-400'>Active</td>
                                            <td className='text-sm py-5 ps-5 text-center flex gap-1'>
                                                <MdEdit onClick={() => navigate(`/jobupdate/${item.id}`)} className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                                                <MdDelete onClick={() => [dispatch(deleteJob(item.id)), navigate('/remote')]} className='bg-blue-400 p-2 rounded-full text-white' size={'35px'} />
                                            </td>
                                        </tr> 
                                        ))   
                                      ) : <h1>no data found</h1> 
                            }
                           
                           
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Jobtable