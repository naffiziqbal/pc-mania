import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import Button from '../ui/Button/Button';
import { getReviews } from '@/utils/APIs';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const reviews = getReviews()
        reviews.then(data => setReviews(data?.data?.data))
    }, [])
    console.log(reviews)
    return (
        <div className=' mx-auto my-12 w-[70%] min-h-96 bg-[#F5F7FF]  rounded-lg'>
            <Swiper
                modules={[Autoplay, Pagination, Scrollbar, A11y]}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
            >

                {
                    reviews?.map((review) =>
                        <div key={review._id} className=''>

                            <SwiperSlide className=' min-h-96'>
                                <div className='flex min-h-52 *:mx-2 absolute top-1/2 -translate-y-1/2 left-0'>
                                    <FaQuoteLeft className='h-fit w-12 relative' />
                                    <div className='flex flex-col justify-between'>
                                        <p>{review?.reviewerMessage} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur repellendus perferendis distinctio aut ad modi aliquam quam cum quasi possimus facilis, delectus minus. Nostrum, at minima sunt omnis deleniti praesentium! </p>
                                        <p className='text-center'> - {review?.reviewerId}</p>
                                        <Button data={"Leave us a review"} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    )
                }
            </Swiper>
        </div >
    );
};

export default Reviews;
