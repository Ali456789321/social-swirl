import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import img2 from "../images/person.jpg"
import img3 from "../images/events.jpg"
import { MdOutlineArrowOutward } from "react-icons/md";
import card from '../data/card';
import { Link } from 'react-router-dom';
import Student from './Students';
import Benefits from './Benefits';


const Elearning = () => {
  return (
    <>
    <div className='px-3 lg:w-10/12 max-[450px]:w-full m-auto'>
    <div className='pb-5 gap-7 grid grid-cols-2 max-sm:grid-cols-1 pt-56 max-sm:pt-28'>
      <div className='max-sm:text-center'>
      <h5 className='text-purple-600 font-bold'>Over 250+ Successful Student</h5>
      <h1 className='text-6xl max-sm:text-4xl font-extrabold pt-6'>Welcome To Social Swirl E-Learning!</h1>
      <h5 className='mt-6 leading-6'>Discover a world of knowledge and growth at Social Swirl. We have empowered over 300 students to succeed in Frontend, Backend, SEO, Human Resource, Graphic Deisgning and Social Media Marketing. Join us to unleash your potential and make a difference</h5>
      <div className='flex mt-6 max-sm:justify-center'>
        <button className='px-5 py-2 rounded-lg bg-purple-600 text-white'>Let's get started</button>
         <span className='cursor-pointer ms-4 px-8 py-2 rounded-md flex items-center border border-red'>
            <h6 className='m-0 p-0'>Register</h6>
            <FaLongArrowAltRight className='ps-3' size={'25px'}/>
         </span>
      </div>
      </div>
      <div className='max-sm:mt-5'>
        <img src={img3} className='rounded-tl-full max-sm:rounded-tl-3xl' alt="" />
      </div>
     </div>
     
    

      {/* Courses */}
      <div className='mt-32'>  
      <h1 className='text-lg text-center mt-40 text-social_right'>learn</h1>
      <h1 className='text-5xl text-center max-sm:mt-0 max-sm:mb-20 ma max-sm:text-3xl font-semibold'>Our Featured Courses</h1>
      <div className='grid grid-cols-3 max-sm:grid-cols-1 mt-10 gap-14'>
       
      {
        card.map((item) => (
          <Link to={`/selectedCourse/${item.id}`}>
             <div key={item.id} class="bg-white max-w-sm rounded overflow-hidden shadow-lg max-sm:m-auto">
          <img className="w-full h-60" src={item.img} alt="Sunset in the mountains"/>
           <div className='flex pt-8 ps-3'>
               <img src={img2} className='w-11 h-11  rounded-full' alt="" />
               <div className='ps-3'>
                 <h1 className='font-medium'>{item.name}</h1>
                 <h5 className='opacity-80 font-thin'>{item.senior}</h5>
               </div>
           </div>
           <div className='pt-5 flex items-center ps-5'>
           <h1 className='font-medium'>{item.course}</h1>
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
      }
      </div>
         
       <Student/>
       <Benefits/>

      <h1 className='text-4xl font-bold text-center mt-40'>Meet Our Team</h1>
      <div className='max-sm:w-10/12 max-sm:mx-auto text-center'>
      <h4 className='mt-2'>Meet the brilliance behind the Social Swirl - a team of passion and innovation</h4>
      </div>
      <div className='grid grid-cols-5 max-sm:grid-cols-2 mt-12'>
      <div className='text-center'>
      <img src={img2} className='w-16 h-16 mx-auto rounded-full' alt="" />
      <h5 className='mt-2'>Waleed Ahmed</h5>
      <h6 className='font-thin'>Front-end developer</h6>
      </div>
      <div className='text-center'>
      <img src={img2} className='w-16 h-16 mx-auto rounded-full' alt="" />
      <h5 className='mt-2'>Haris Saeed</h5>
      <h6 className='font-thin'>Full-stack engineer</h6>
      </div>
      <div className='text-center'>
      <img src={img2} className='w-16 h-16 mx-auto rounded-full' alt="" />
      <h5 className='mt-2'>Suheer Zahid</h5>
      <h6 className='font-thin'>Front-end developer</h6>
      </div>
      <div className='text-center'>
      <img src={img2} className='w-16 h-16 mx-auto rounded-full' alt="" />
      <h5 className='mt-2'></h5>Awais Yousaf
      <h6 className='font-thin'>SEO Expert</h6>
      </div>
      <div className='text-center'>
      <img src={img2} className='w-16 h-16 mx-auto rounded-full' alt="" />
      <h5 className='mt-2'>Numan</h5>
      <h6 className='font-thin'>Graphic Designer</h6>
      </div>
      </div>
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

export default Elearning