import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { setIsReviewModalOpen } from '@/redux/user/UserSlice';
import { createReview } from '@/utils/APIs';
import React, { useState } from 'react';
import { toast } from 'sonner';

const AddReview = ({ product }) => {
    const [ratings, setRating] = useState(5);
    const dispatch = useAppDispatch()
    const { user, isReviewModalOpen } = useAppSelector(state => state.user)
    // handle Rating Change
    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const message = e.target.elements['text-area'].value

        const { data } = await createReview(
            {
                ratingPoint: ratings,
                reviewerMessage: message,
                reviewerId: user._id,
                reviewerName: user.name,
                reviewerImage: user.image,
                reviewerEmail: user.email,
                productId: product?.data?._id,
            })
        if (data.success) {
            toast('Review Added Successfully')
            dispatch(setIsReviewModalOpen(false))
        }
    }
    return (
        <div className={`absolute min-w-96 bg-slate-100 shadow-2xl p-3 rounded-md   left-1/2 -translate-x-1/2 duration-300 ${isReviewModalOpen ? "top-1/2 w-fit z-50" : "-top-[100rem]"} `}>
            <form className='' onSubmit={handleFormSubmit}>
                <h3 className='text-center font-bold mb-6'>
                    Rate this Product
                </h3>
                <div>
                    <label htmlFor="rating" className='flex items-center gap-5'>
                        Point:
                        <input onChange={handleRatingChange} type="range" name="rating" defaultValue={5} value={ratings} step={1} max={5} min={1} className='max-w-96 min-w-0 outline-none' />
                    </label>
                </div>
                <div>
                    <label>
                        <textarea name='text-area' className='w-full border-blue-500 rounded-md border p-3 outline-none' rows={5} />
                    </label>
                </div>
                <div className='flex justify-center gap-3'>
                    <input type="submit" className='text-center bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer' />
                </div>
            </form>
            <button className='absolute top-2 right-3' onClick={() => dispatch(setIsReviewModalOpen(false))}>X</button>
        </div>
    );
};

export default AddReview;
