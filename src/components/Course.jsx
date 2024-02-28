import React, { useEffect, useState } from 'react'
import card from '../data/card'
import { Link, useNavigate, useParams } from 'react-router-dom'
import img2 from "../images/person.jpg"
import { IoStarSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";

const Course = () => {
  const [course, setCourse] = useState()
  const { id } = useParams()
  const navigate = useNavigate()
  console.log(id);

  useEffect(() => {
    if (id) {
      const single = card.filter((ele) => ele.id === +id)
      setCourse(single[0])
    }
  }, [])

  console.log(course);

  return (
    <>
      {course ? (
        <div className='lg:w-10/12 max-[450px]:w-full m-auto pt-24'>
          <div className='flex max-sm:justify-center'>
            <img src={img2} className='w-11 h-11  rounded-full' alt="" />
            <div className='ps-2'>
              <h1>{course.name}</h1>
              <h5 className='font-thin'>{course.senior}</h5>
            </div>
          </div>
          <div className='flex pt-2 max-sm:justify-center'>
            <IoStarSharp color='yellow' />
            <IoStarSharp color='yellow' />
            <IoStarSharp color='yellow' />
            <IoStarSharp color='yellow' />
            <IoStarSharp color='lightgray' />
            <p className='font-thin text-xs ps-2'>4.9</p>
          </div>

          <div className='flex gap-10 max-sm:mx-2 mt-10 max-sm:flex-col-reverse'>
            <div>
              <h2 className='max-sm:text-center'>{course.desc}</h2>
              <h3 className='text-4xl font-bold mt-5 max-sm:text-center'>#Features</h3>
              <div className='flex items-center mt-5'>
                <GoDotFill />
                <h4 className='ps-4'>Learn the art of graphic design with guidance from seasoned designers</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Explore Potential internships to apply your graphic design skills</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Immense yourself in creative design principles and tools</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Our course is designed for rapid skill acquisition within 3 months</h4>
              </div>

              <h3 className='text-4xl font-bold mt-5 max-sm:text-center'>#Prerequisties</h3>
              <div className='flex items-center mt-5'>
                <GoDotFill />
                <h4 className='ps-4'>Basic knowledge of computers</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Basic English reading and writing skills</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Basic communication skills</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>1 laptop or PC with general specifications</h4>
              </div>

              <h3 className='text-4xl font-bold mt-5 max-sm:text-center'>#Course Outline</h3>
              <div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Server-side vs. Client-side Overview of Backend Languages</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>PHP, Python, Ruby, Node.js Choosing the Right Language for the Project</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Relational vs. NoSQL Popular Database Management Systems</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Queries, Inserts, Updates, Deletes Database Design Principles</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Principles and Concepts API Endpoints and Methods</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Password Hashing, JWT OAuth and OpenID Connect</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'>Unit Testing, Integration Testing Test-Driven Development (TDD)</h4>
              </div>
              <div className='flex items-center mt-2'>
                <GoDotFill />
                <h4 className='ps-4'> Load Balancing, Caching Database Optimization</h4>
              </div>
              </div>
            </div>

            <div>
              <img src={course.img} className='w-course_img max-sm:w-10/12 max-sm:mx-auto rounded-md' alt="" />
              <div className='bg-gradient-to-r from-social_left to-social_right w-9/12 p-0.5 rounded-lg mt-10 max-sm:mx-auto max-sm:w-10/12'>
                <div className='bg-white w-full h-full py-8 ps-5 rounded-lg'>
                  <h2 className='font-thin'>{course.course}</h2>
                  <h2 className='font-semibold text-2xl pt-2'>Course fee: 30,000</h2>
                  <span className=" mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">#{course.course}</span>
                  <span className="mt-3 inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 text-purple-600 bg-purple-300">certificate</span>
                  <div>
                    <Link to={`/register/${course.title}`}>
                    <button className='bg-gradient-to-r from-social_right to-social_left px-4 py-3 text-white font-bold rounded-lg mt-4'>Register Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className='text-4xl font-bold mt-32 max-sm:text-center'>Course Overview</h2>
          <h4 className='mt-3 max-sm:mx-2 max-sm:text-center'>Immense yourself in the vibrant world of visual storytelling and creativity. This course is a deep dive into graphic design, where you'll become proficent in industry-standard tools like Adobe, Photoshop and Illustrator. From understanding design principles to creating visually stunning graphics, this journey will not only enhance your creative flair but also provide you with the skills to curate an impressive portfolio showcasing your designs</h4>
        </div>
        
      ) : (
        <p>No course found with the given ID</p>
      )}
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

export default Course