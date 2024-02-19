import React from 'react'
import img1 from '../images/sa.png'
import img2 from "../images/pexels-fauxels-3183150.jpg"
import img3 from "../images/events.jpg"
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Reviews from './Reviews'
import Clients from './Clients'

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className='flex justify-between pt-56 max-sm:pt-28 lg:w-10/12 max-[450px]:w-full m-auto ps-2 pe-2 max-sm:flex-col'>
        <div className='leading-6 max-sm:text-center'>
        <h1 className='lg:text-7xl max-[650px]:text-4xl font-bold bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent'>SOCIAL SWIRL</h1>  
          <h4 className='pt-4'>Explore the world of web development with Social Swirl. Join our user-friendly courses led by industry experts, offering hands-on experiences and a clear path to mastering coding. Join us to unlock your coding skills and confidently shape your future success</h4>  
          <div className='text-white mt-10 flex max-sm:justify-center gap-5'>
            <button className='bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-5 pe-5 max-sm:ps-2 max-sm:pe-2 rounded-lg'>Feasible Timing</button>
            <button className='ms-7 max-sm:ms-0 bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-5 pe-5 max-sm:ps-2 max-sm:pe-2 rounded-lg'>Project Based Learning</button>
          </div>
        </div>
        <img src={img1} className='w-full m-auto relative bottom-40 max-sm:bottom-14' alt="" />
      </div>

      {/* 2nd Column */} 
      <div className='gap-10 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border'>
         <img src={img2} className='w-6/12 h-96 max-sm:w-full' alt="" />
         <div className='max-sm:text-center w-6/12 max-sm:w-full'>
         <h1 className='text-4xl font-medium'>Welcome To Social Swirl</h1>
         <h4 className='mt-5 text-2xl font-bold text-social_right'>Best Software House Of Pakistan</h4>
         <h4 className='mt-5 leading-6'>The company's mission is to provide high-quality software solutions and media that helpe buisness and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to exvellence. Social Swirl is dedicated to providing personalised reliable, and affordable services to its clients, AIMS Our missiom is to provide high-quality software solutions and media services that help buisness and individuals optimise their online presence and achive their goals </h4>
         <button onClick={() => navigate('/e-learning')} className='mt-5 text-white bg-gradient-to-r from-social_left to-social_right pt-3 pb-3 ps-8 pe-8 rounded-lg'>Courses</button>
         </div>
      </div>

       {/* 2nd Column */} 
       <div className='gap-10 mt-20 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border'>
         <div className='max-sm:text-center w-6/12 max-sm:w-full pt-20 max-sm:pt-10'>
         <h1 className='text-4xl font-medium'>Events And Updates</h1>
         <h4 className='mt-5 leading-6'>The company's mission is to provide high-quality software solutions and media that helpe buisness and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to exvellence. Social Swirl is dedicated to providing personalised reliable, and affordable services to its clients, AIMS Our missiom is to provide high-quality software solutions and media services that help buisness and individuals optimise their online presence and achive their goals </h4>
         </div>
         <img src={img3} className='w-6/12 h-96 max-sm:w-full' alt="" />
      </div>
     
     <h1 className='text-5xl text-center my-40 max-sm:my-20 max-sm:text-3xl font-semibold'>Curent Employees</h1>
     <Carousel/>
     <h1 className='text-5xl text-center my-40 max-sm:my-20 mb-20 max-sm:text-3xl font-semibold'>What Companies Say About Us</h1>
     <Reviews/>
     <h1 className='text-5xl text-center my-40 max-sm:my-20 mb-20 max-sm:text-3xl font-semibold'>Our Clients</h1>
     <Clients/>
  
  
  <div className='bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 max-sm:mt-20'>
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

export default Home