import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const getReviews = async () => {
            const res = await fetch(`https://pc-mania.vercel.app/api/v1/review/all-review`)
            const { data } = await res.json()
            setReviews(data)
        }
        getReviews()
    }, [])

    return (
        <div className='mx-auto my-12 w-[70%] min-h-52 bg-[#F5F7FF] flex justify-center items-center'>

            {
                reviews?.map((review, idx) =>
                    <div key={idx} className='flex  *:mx-2'>
                        <FaQuoteLeft className='h-fit w-12' />
                        <div>
                            <p>{review?.reviewerMessage} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur repellendus perferendis distinctio aut ad modi aliquam quam cum quasi possimus facilis, delectus minus. Nostrum, at minima sunt omnis deleniti praesentium! </p>
                            <p className='text-center'> - {review?.reviewerId}</p>
                            <button className='w-fit p-3 border-blue-400 text-blue-400 border-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white duration-300 hover:border-white hover:border-2'>Leave us a Review</button>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Reviews;
