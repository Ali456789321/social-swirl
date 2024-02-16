import React from 'react'
import img1 from "../images/sa.png"

const Buisness = () => {
  return (
    <>
      <div className='pt-40 w-10/12 m-auto'>
         <div className='bg-gradient-to-r from-social_left to-social_right ps-5 py-5 rounded-lg'>
           <h1 className='text-5xl font-bold text-white max-sm:text-4xl'>Danial Khan</h1>
           <h2 className='text-white text-2xl font-semibold mt-4'>CEO</h2>
           <h3 className='text-white font-medium'>Social Swirl</h3>
         </div>

         <div className='flex items-center gap-10 mt-20 max-sm:flex-col'>
             <div>
                <h4 className='font-bold'>Exciting Announcement - Introducing Our Business Outsourcing Project</h4>
                <h5>We are delighted to announce an exciting new development at Social Swirl: the launch of our highly anticipated Business Outsourcing Project. At Social Swirl, we have always been committed to delivering exceptional services and innovative solutions to meet the evolving needs of our clients. With our new Business Outsourcing Project, we are taking our commitment to the next level by offering comprehensive outsourcing solutions tailored to enhance the efficiency and productivity of your business operations.</h5>
              
                <h4 className='font-bold mt-5'>Increased focus on core competencies:</h4>
                <h5>By outsourcing non-core functions to our expert team, you can redirect your valuable time and resources towards your primary business goals.</h5>

                <h4 className='font-bold mt-5'>Cost savings and improved profitability:</h4>
                <h5>Our efficient outsourcing services enable you to reduce overhead costs, streamline processes, and maximize your company's profitability.</h5>

                <h4 className='font-bold mt-5'>Access to specialized expertise:</h4>
                <h5>Benefit from the skills and knowledge of our experienced professionals who excel in various areas, including customer support, IT, finance, and more.</h5>

                <h4 className='font-bold mt-5'>Scalability and flexibility:</h4>
                <h5>
                Our outsourcing solutions are designed to adapt to your business needs, allowing you to scale operations seamlessly and respond quickly to market demands.Whether you are a small startup or an established enterprise, our Business Outsourcing Project can provide you with the competitive edge you need in today's dynamic business landscape. We invite you to explore the possibilities and discuss how our tailored solutions can benefit your organization.
                </h5>

               <h5 className='mt-5'>
                Contact us today to schedule a consultation or visit our website for more details. We would like to express our sincere gratitude for your continued trust and support. We are truly excited about this new chapter for Social Swirl and the opportunities it brings for both our company and our valued clients. Stay tuned for more updates and be a part of our journey towards greater success!
              </h5>

               <div className='w-5 border border-dashed border-black my-2'></div>

              <h5>Danial Khan</h5>
              <h5>CEO</h5>
              <h5>www.socialswirl.org</h5>
             </div>
             <img className='w-80 rounded-full' src={img1} alt="" />
         </div>
         <h1 className='text-6xl max-sm:text-3xl text-center my-40'>COMING SOON</h1>
      </div> 

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

export default Buisness

