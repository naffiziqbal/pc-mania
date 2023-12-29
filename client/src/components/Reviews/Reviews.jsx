import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Pagination, Scrollbar } from 'swiper/modules';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    reviews.push({
        _id: '6582db616e98be8f016b5d49',
        productId: 'test',
        reviewerId: 'test',
        reviewerMessage: 'test',
        createdAt: '2023-12-20T12:17:37.298Z',
        updatedAt: '2023-12-20T12:17:37.298Z',
        __v: 0
    },
        {
            _id: '6582db616e98be8f016b5d49',
            productId: 'test',
            reviewerId: 'test',
            reviewerMessage: 'test',
            createdAt: '2023-12-20T12:17:37.298Z',
            updatedAt: '2023-12-20T12:17:37.298Z',
            __v: 0

        })
    useEffect(() => {
        const getReviews = async () => {
            const res = await fetch(`https://pc-mania.vercel.app/api/v1/review/all-review`)
            const { data } = await res.json()
            setReviews(data)
            console.log(data)
        }
        getReviews()
    }, [])

    return (
        <div className=' mx-auto my-12 w-[70%] min-h-64 bg-[#F5F7FF] flex justify-center items-center rounded-lg'>
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
                    reviews?.map((review, idx) =>
                        <div key={idx} className=''>

                            <SwiperSlide className='min-h-52'>
                                <div className='flex *:mx-2 '>
                                    <FaQuoteLeft className='h-fit w-12' />
                                    <div>
                                        <p>{review?.reviewerMessage} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur repellendus perferendis distinctio aut ad modi aliquam quam cum quasi possimus facilis, delectus minus. Nostrum, at minima sunt omnis deleniti praesentium! </p>
                                        <p className='text-center'> - {review?.reviewerId}</p>
                                        <button className='w-fit p-3 border-blue-400 text-blue-400 border-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white duration-300 hover:border-white hover:border-2'>Leave us a Review</button>
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
