import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import SharedProfileUI from '../ui/SharedProfileUI';
import { getOrdersById } from '@/utils/APIs';
import OrdersTable from '@/components/Orders/OrdersTable';


const UserView = ({ user }) => {
    const [orders, setOrders] = useState([])
    // console.log(user, " user view")
    useEffect(() => {
        const getOrders = async () => {
            const { data } = await getOrdersById(user?._id)
            setOrders(data?.data)
            // console.log(data.data, " orders")
        }
        getOrders()
    }, [user?._id])

    return (
        <div className='h-fit flex flex-col w-full '>
            <SharedProfileUI user={user} />
            <hr className='border w-full' />
            <div>

                <section className='flex justify-between items-center my-6'>
                    <h4 className='text-xl font-semibold'>My Top Orders</h4>
                    <Link href={'/dashboard/orders'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>
                </section>

                {/* Orders Table */}
                <div className='max-h-96 overflow-y-scroll scroll-smooth my-5'>
                    <OrdersTable orders={orders} />
                </div>

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
