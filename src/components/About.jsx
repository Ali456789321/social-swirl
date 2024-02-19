import React from 'react'
import img2 from "../images/pexels-fauxels-3183150.jpg"
import img3 from "../images/events.jpg"

const About = () => {
  return (
    <>
    <div className='pt-40'>

    <div className='bg-hero  bg-center bg-no-repeat bg-cover h-96'>
        <div className='h-full bg-white_shade flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>About The Company</h1>
        </div>
      </div>

    <div className='mt-20 gap-10 flex max-sm:flex-col justify-between w-10/12 max-sm:w-full m-auto border'>
    <img src={img2} className='w-6/12 h-5/6 max-sm:w-full' alt="" />
    <div className='max-sm:text-center w-6/12 max-sm:w-full'>
    <h1 className='text-4xl font-medium'>About Us</h1>
    <h4 className='mt-5 leading-6'>Social Swirl, founded by Danial Khan in 2022, is a dynamic software company based in the United Kingdom. Specializing in innovative software and media solutions, we focus on new creations to help businesses and individuals optimize their online presence and achieve their goals. Our mission is to provide high-quality, personalized, reliable, and affordable services. With an experienced team dedicated to excellence, we aim to build lasting client relationships based on trust, transparency, and open communication.</h4>
    </div>
 </div>

  {/* 2nd Column */} 
  <div className='gap-10 mt-36 max-sm:mt-20 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border'>
    <div className='max-sm:text-center w-6/12 max-sm:w-full pt-20 max-sm:pt-10'>
    <h1 className='text-4xl font-medium'>Message From The CEO</h1>
    <h4 className='mt-5 leading-6'>The company's mission is to provide high-quality software solutions and media that helpe buisness and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to exvellence. Social Swirl is dedicated to providing personalised reliable, and affordable services to its clients, AIMS Our missiom is to provide high-quality software solutions and media services that help buisness and individuals optimise their online presence and achive their goals </h4>
    </div>
    <img src={img3} className='w-6/12 h-96 max-sm:w-full' alt="" />
 </div>
    </div>

    <div className='bg-gradient-to-r from-social_left to-social_right flex items-center justify-center gap-10 max-sm:flex-col py-20 mt-32'>
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

export default About