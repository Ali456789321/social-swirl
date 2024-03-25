import React, { lazy } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../../images/sa.png"
import review from '../../data/review';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='w-10/12 max-sm:w-full m-auto'>
            <div className='my-10 max-sm:hidden'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation,Pagination]}
                    className="mySwiper"
                >

                    {
                        review.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div className='text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2' key={item.id}>
                                      <img className='rounded-full m-auto w-14 h-14 mb-3' src={item.img} alt="" />
                                      <p className='text-base max-sm:text-xs'>{item.reviews}</p>
                                      <div className='flex items-center flex-col justify-center'>
                                      <img className='w-10 h-10 rounded-full mt-2' src={img2} alt="" />
                                      <h5 className='pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold'>Bundu Khan</h5>
                                      </div>
                                    </div>
                                </SwiperSlide>

                            </>
                           
                        ))
                    }
                </Swiper>
            </div>

            <div className='my-0 hidden max-sm:block'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation,Pagination]}
                    className="mySwiper"
                >

                    {
                        review.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div className='text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2' key={item.id}>
                                    <img className='rounded-full m-auto w-14 h-14 mb-3' src={item.img} alt="" />
                                      <p className='text-base max-sm:text-xs'>{item.reviews}</p>
                                      <div className='flex items-center flex-col justify-center'>
                                      <img className='w-10 h-10 rounded-full mt-2' src={img2} alt="" />
                                      <h5 className='pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold'>Bundu Khan</h5>
                                      </div>
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

export default Reviews