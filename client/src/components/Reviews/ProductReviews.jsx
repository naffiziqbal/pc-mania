import React, { useState } from 'react';
import { Star } from 'lucide-react';
import AddReview from './AddReview';
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setIsModalOpen, setIsReviewModalOpen } from '@/redux/user/UserSlice';

const ProductReviews = ({ review, product }) => {
    const { user } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const handleReview = () => {
        if (!user._id) {
            dispatch(setIsModalOpen(true))
            return
        }
        dispatch(setIsReviewModalOpen(true))
    }
    return (
        <div className='bg-[#f5f5f7] min-h-0 p-4 w-full'>
            <h2 className='underline text-blue-500 cursor-pointer' onClick={handleReview}>Add Review</h2>
            {
                review?.length ? review?.map(data => <div className='flex gap-2 items-center' key={data?._id}>
                    <Image src={data?.reviewerImage} width={50} height={50} className='rounded-full h-fit' alt='reviewer image' />
                    <div className='my-4 flex flex-col'>
                        <strong>{data?.reviewerName}</strong>
                        <section>
                            {
                                data?.ratingPoint === 5 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /><Star /><Star /><Star /><Star /></span>}
                            {
                                data?.ratingPoint === 4 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /><Star /><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 3 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 2 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 1 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /></span>
                            }
                            {data?.reviewerMessage}
                        </section>
                    </div>
                </div>)
                    : <div>No Reviews <br />

                    </div>
            }
            <AddReview product={product} />
        </div>
    );
};

export default ProductReviews;
