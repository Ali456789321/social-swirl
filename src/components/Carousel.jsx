import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../images/pexels-hasibullah-zhowandai-819530.jpg"
import caro from '../data/caro';

// Import Swiper styles
import 'swiper/css';


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className='w-10/12 max-sm:w-full m-auto'>
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
                <div className='text-center' key={item.id}>
        <img src={item.img} className='w-52 h-52 mx-auto rounded-full' alt="" />
        <h1>{item.name}</h1>
        <h1>{item.position}</h1>
        <button className='mt-2 text-white bg-gradient-to-r from-social_left to-social_right pt-2 pb-2 ps-5 pe-5 rounded-lg'>Explore</button>
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
                <div className='text-center' key={item.id}>
        <img src={item.img} className='w-40 h-40 mx-auto rounded-full' alt="" />
        <h1>{item.name}</h1>
        <h1>{item.position}</h1>
        <button className='mt-2 text-white bg-gradient-to-r from-social_left to-social_right pt-2 pb-2 ps-5 pe-5 rounded-lg'>Explore</button>
        </div>
                </SwiperSlide>
            
                </>
            ))
        }
  </Swiper>
</div>
    </div>
  )
}

export default Carousel