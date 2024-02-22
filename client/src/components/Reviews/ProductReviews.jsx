import React from 'react';
import Reviews from './Reviews';
import { Star } from 'lucide-react';

const ProductReviews = ({ data }) => {
    console.log(data)
    return (
        <div className='bg-[#f5f5f7] min-h-0 p-4 w-full'>
            {
                data?.length ? data?.map(data => <div key={data?._id}>
                    <div className='flex gap-2 my-4'>
                        <strong>{data?.reviewerName}</strong>
                        <section>
                            {
                                data?.ratingPoint === 5 && <span className='flex *:fill-yellow-400 text-yellow-400 *:overflow-hidden'><Star /><Star /><Star /><Star /><Star /></span>}
                            {
                                data?.ratingPoint === 4 && <span className='flex'><Star /><Star /><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 3 && <span className='flex'><Star /><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 2 && <span className='flex'><Star /><Star /></span>
                            }
                            {
                                data?.ratingPoint === 1 && <span className='flex'><Star /></span>
                            }
                            {data?.reviewerMessage}
                        </section>
                    </div>
                </div>)
                    : <div>No Reviews <br />
                        Review Now
                    </div>
            }
        </div>
    );
};

export default ProductReviews;
