import React from 'react'
import img2 from "../images/pexels-hasibullah-zhowandai-819530.jpg"
import lecture from '../data/lecture'

const Lectures = () => {
  return (
    <>
    <div className='pt-44 w-10/12 m-auto'>
    <h1 className='text-5xl font-bold text-center'>Watch and Learn</h1>
    <h5 className='text-center mt-2 max-sm:mt-4'>Boost your skill with professional instructors</h5>
    <div className='gap-10 grid grid-cols-3 max-sm:grid-cols-1 pt-8'>
        {
            lecture.map((item) => (
                <div>
                <img src={item.img} alt="" className='rounded-lg hover:scale-105 transition duration-500 cursor-pointer'/>
                <div className='ps-3 pt-4'>
                <h3 className='font-bold'>{item.intro}</h3>
                <h4 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil minima</h4>
                <span className=" mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">#snippet</span>
                    <span className="mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">certificate</span>
                </div>
                </div>
            ))
        }
      
        {/* <div>
        <img src={img2} alt="" className='rounded-lg hover:scale-105 transition duration-500 cursor-pointer'/>
        <div className='ps-3 pt-4'>
        <h3 className='font-bold'>Introduction to HTML</h3>
        <h4 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil minima</h4>
        <span className=" mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">#snippet</span>
            <span className="mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">certificate</span>
        </div>
        </div>
        <div>
        <img src={img2} alt="" className='rounded-lg hover:scale-105 transition duration-500 cursor-pointer'/>
        <div className='ps-3 pt-4'>
        <h3 className='font-bold'>Introduction to HTML</h3>
        <h4 className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nihil minima</h4>
        <span className=" mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">#snippet</span>
            <span className="mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">certificate</span>
        </div>
        </div> */}
    </div>
    </div>
    </>
  )
}

export default Lectures