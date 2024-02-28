import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import img2 from "../images/person.jpg"
import caro from '../data/caro';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-social_left to-social_right h-40'>
    <div className='w-10/12 max-sm:w-full m-auto relative bottom-10'>
        <div className='max-sm:hidden'>
        <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    
        {
            caro.map((item) => (
                <>
                <SwiperSlide>
                  <div className='bg-white rounded-2xl py-5'>
                     <img src={item.img} className='w-36 h-36 rounded-full m-auto' alt="" />
                     <h1 className='pt-2 text-center text-xl font-bold'>{item.name}</h1>
                     <h2 className='pt-2 tracking-widest text-center text-xl'>{item.position}</h2>
                  </div>
                </SwiperSlide>
            
                </>
            ))
        }
  </Swiper>
        </div>


<div className='hidden max-sm:block'>
<Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    modules={[Autoplay]}
    className="mySwiper"
  >
    
        {
            caro.map((item) => (
                <>
                <SwiperSlide>
                <div className='bg-white rounded-2xl w-9/12 m-auto py-5'>
                     <img src={item.img} className='w-36 h-36 rounded-full m-auto' alt="" />
                     <h1 className='pt-2 text-center text-xl font-bold'>{item.name}</h1>
                     <h2 className='pt-2 tracking-widest text-center text-xl'>{item.position}</h2>
                  </div>
                </SwiperSlide>
            
                </>
            ))
        }
  </Swiper>
</div>
    </div>
    </div>
  
    </>
  )
}

export default Carousel