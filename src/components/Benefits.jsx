import React from 'react'
import gif1 from "../images/gif1.jpg"
import gif2 from "../images/gif2.jpg"
import gif3 from "../images/gif3.jpg"

const Benefits = () => {
  return (
   <div>
    <h1 className='mt-60 text-lg text-center text-social_right'>KEY BENEFITS</h1>
    <h2 className='leading-normal text-4xl text-center max-sm:mt-20 max-sm:mb-20 ma max-sm:text-3xl font-semibold w-9/12 m-auto'>Learning reimagined: engaging stories, actionable modules, and flexible courses.</h2>
    <div className='grid grid-cols-3 max-sm:grid-cols-1'>
       <div>
        <img src={gif1} alt="" />
        <div className='px-10'>
        <h1 className='text-lg font-medium'>Learn through engaging stories</h1>
        <h2>"We embrace the timeless lesson of 'Slow and steady wins the race,' employing engaging stories to teach practical lessons. This approach helps individuals better understand complex concepts and encourages real-life application."</h2>
        </div>
       </div>
       <div>
        <img src={gif2} alt="" />
        <div className='px-10'>
        <h1 className='text-lg font-medium'>Straight talk, no nonsense!</h1>
        <h2>We craft our modules with a straightforward approach, prioritizing essential content. Through step-by-step exercises and real-world applications, we ensure that you can effortlessly integrate these skills into your daily life."</h2>
        </div>
       </div>
       <div>
        <img src={gif3} alt="" />
        <div className='px-10'>
        <h1 className='text-lg font-medium'>Flexible Learning</h1>
        <h2>
"Experience the best of both worlds with our hybrid learning approach—on-demand and live sessions. Tailor your learning to your style, whether visual or hands-on, with the flexibility to access anytime, anywhere."</h2>
        </div>
       </div>
    </div>
   </div>
  )
}

export default Benefits 