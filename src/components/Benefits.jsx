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
        <h2>“Slow and steady wins the race" is a lesson that many people remember. That’s why we use interesting stories to teach practical lessons that can help you understand difficult concepts and think of ways to use them in real life.</h2>
        </div>
       </div>
       <div>
        <img src={gif2} alt="" />
        <div className='px-10'>
        <h1 className='text-lg font-medium'>Seedhi Baat, no Bakwas!</h1>
        <h2>Our modules are designed with a no-nonsense approach, focusing on what truly matters. With step-by-step exercises and real-world applications, you'll be able to easily apply these skills in your everyday life.</h2>
        </div>
       </div>
       <div>
        <img src={gif3} alt="" />
        <div className='px-10'>
        <h1 className='text-lg font-medium'>Flexible Learning</h1>
        <h2>Our hybrid approach combines on-demand and live sessions, allowing you to learn at your own pace and style. Whether you're a visual learner or prefer hands-on practice, our flexible structure accommodates your unique learning style, anytime, anywhere.</h2>
        </div>
       </div>
    </div>
   </div>
  )
}

export default Benefits 