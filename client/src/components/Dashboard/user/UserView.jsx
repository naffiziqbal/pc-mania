import { PenBoxIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SharedProfileUI from '../ui/SharedProfileUI';
import { getOrdersById } from '@/utils/APIs';

const UserView = ({ user }) => {
    const [orders, setOrders] = useState([])
    console.log(user, " user view")
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await getOrdersById(user?._id)
            setOrders(data?.data)
            console.log(data.data, " orders")
        }
        getOrders()
    }, [user?._id])
    const handleCancel = () => {
        alert('Nothing Happens')
    }
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

                    <div className='max-w-md'>

                        {
                            orders.slice(0, 200)?.map(data => data?.orderItems?.map((items, idx) => <div key={idx} className='flex gap-3 justify-between'>
                                <Image src={items.image} alt='' height={80} width={80} />
                                <h3 className='text-lg font-bold'>{items.name}</h3>
                                <p>{items?.quantity}</p>
                                <p className='text-blue-600 cursor-pointer'
                                    onClick={handleCancel}
                                >Cancel</p>
                            </div>))}


                    </div>

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
