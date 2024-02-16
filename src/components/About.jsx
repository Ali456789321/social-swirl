import React from 'react'
import img2 from "../images/pexels-fauxels-3183150.jpg"
import img3 from "../images/events.jpg"

const About = () => {
  return (
    <>
    <div className='pt-40'>
        <h1 className='text-4xl font-bold text-center'>About The Company</h1>
    <div className='mt-20 gap-10 flex max-sm:flex-col justify-between w-10/12 max-sm:w-full m-auto border'>
    <img src={img2} className='w-6/12 h-5/6 max-sm:w-full' alt="" />
    <div className='max-sm:text-center w-6/12 max-sm:w-full'>
    <h1 className='text-4xl font-medium'>About Us</h1>
    <h4 className='mt-5 leading-6'>Social Swirl is a dynamic and innovative software company founded by Danial Khan in 2022. Based in United Kingdom. Social Swirl specialises in Software and media solutions with a focus on new creations. The company's mission is to provide high-quality software solutions and media that help businesses and individuals optimise their online presence and achieve their goals. With a team of experienced professionals and a commitment to excellence, Social Swirl is dedicated to providing personalised, reliable, and affordable services to its clients. AIMS Our mission is to provide high-quality software solutions and media services that help businesses and individuals optimise their online presence and achieve their goals. At Social Swirl, we are committed to delivering personalised, reliable, and affordable services to our clients, with a focus on new creations and cutting- edge technologies.We maintain a team of experienced professionals who are dedicated to providing exceptional customer service and support, and we strive to build strong and lasting relationships with our clients based on trust, transparency, and open communication.</h4>
    </div>
 </div>

  {/* 2nd Column */} 
  <div className='gap-10 mt-36 max-sm:mt-20 flex max-sm:flex-col-reverse justify-between w-10/12 max-sm:w-full m-auto border'>
    <div className='max-sm:text-center w-6/12 max-sm:w-full pt-20 max-sm:pt-10'>
    <h1 className='text-4xl font-medium'>Events And Updates</h1>
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