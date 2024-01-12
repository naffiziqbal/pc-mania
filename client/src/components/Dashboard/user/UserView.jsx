import { PenBoxIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SharedProfileUI from '../ui/SharedProfileUI';

const UserView = ({ user }) => {
    return (
        <div className='h-fit flex flex-col w-full'>
            <SharedProfileUI user={user} />
            <hr className='border w-full' />
            <div>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Top Orders</h4>
                    <Link href={'/dashboard/orders'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Orders</div>

                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>
                        My Wishlists
                    </h4>
                    <Link href={'/dashboard/wishlist'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Wishlisted Product</div>
                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Cancelation</h4>
                    <Link href={'/dashboard/cancels'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Cancelation</div>

                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Reviews</h4>
                    <Link href={'/dashboard/reviews'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>
                    <div>This Field Will Show Last Three Reviews</div>
                </section>
            </div>
        </div>
    );
};

export default UserView;
