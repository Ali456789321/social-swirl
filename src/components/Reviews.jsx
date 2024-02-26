import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../images/person.jpg"
import review from '../data/review';
import img3 from "../images/sa.png"
import 'swiper/css';
import 'swiper/css/pagination';




// import required modules
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
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >

                    {
                        review.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div className='text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2' key={item.id}>
                                        <p className='text-base max-sm:text-xs'>{item.reviews}</p>
                                        <div className='flex items-center flex-col justify-center'>
                                            <img className='w-10 h-10 rounded-full mt-2' src={img3} alt="" />
                                            <h5 className='pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold'>Bundu Khan</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </>
                            //  bg-gradient-to-r from-social_left to-social_right text
                        ))
                    }
                </Swiper>
            </div>

            <div className='mt-0 hidden max-sm:block'>
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
                    modules={[Autoplay, Navigation, Pagination]}
                    className="mySwiper"
                >

                    {
                        review.map((item) => (
                            <>
                                <SwiperSlide>
                                    <div className='text-center max-sm:w-full px-10 py-3 rounded-xl my-10 m-auto max-sm:mx-2' key={item.id}>
                                        <p className='text-base max-sm:text-xs'>{item.reviews}</p>
                                        <div className='flex items-center flex-col justify-center'>
                                            <img className='w-10 h-10 rounded-full mt-2' src={img3} alt="" />
                                            <h5 className='pt-2 text-base ms-2 bg-gradient-to-r from-social_left to-social_right bg-clip-text text-transparent font-semibold'>Bundu Khan</h5>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </>
                            //  bg-gradient-to-r from-social_left to-social_right text
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default Reviews