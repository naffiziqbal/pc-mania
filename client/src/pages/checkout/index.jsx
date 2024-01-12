import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoCart, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const router = useRouter()
    const [itemsTotal, setItemsTotal] = useState(0)
    const { orders } = useSelector(state => state.orders)
    console.log(orders)
    useEffect(() => {
        const price = orders.map(data => parseInt(data.price))
        const itemsTotal = price?.reduce((a, b) => a + b, 0)
        setItemsTotal(itemsTotal)
    }, [orders])
    return (
        <>
            {
                orders.length ? <div className='flex md:flex-row gap-3 flex-col'>
                    <div className='md:w-2/3 w-full'>
                        <p className='my-4 font-bold text-2xl'>This Is Checkout Page</p>
                        <section className='h-32 drop-shadow-lg shadow-3xl  shadow-slate-400 rounded-lg p-2'>This Will be an adress</section>
                        <section className='shadow-3xl p-2 rounded-md mt-10'>
                            {
                                orders
                                    ?.map(data =>
                                        <div key={data._id}
                                            className='flex items-center gap-3 shadow-sm'
                                        >
                                            <Image src={data?.image} alt='p-i' width={80} height={80} className='object-contain w-24 h-24 aspect-[2/3]' />
                                            <section className='w-full'>
                                                <section className='flex justify-between'>
                                                    <p>{data?.name}</p>
                                                    <p>Qty : {data?.quantity}</p>
                                                    <p>$ : {data?.price}</p>
                                                </section>
                                                <p className='text-xs'>Band | color |</p>
                                            </section>
                                        </div>)
                            }
                        </section >
                    </div >
                    <div className=' min-h-52 w-full md:w-1/3 shadow-xl '>
                        <h5 className='font-bold'>Order Summary</h5>
                        <section className='w-full text-start'>
                            <p>Items Total :{itemsTotal} </p>
                            <p>Delivery Fee  : 50 </p>
                            <p>Discount : N/A </p>
                            <p>Total Payment : {itemsTotal + 50}</p>
                        </section>
                    </div>
                </div> : <div className='flex flex-row  gap-5 items-center'> <span>Please Select a Product to order</span>
                    <Link href={'/cart'}><IoCartOutline className='w-12 h-12 text-blue-600' /></Link>
                </div>
            }
        </>
    );
};

export default Checkout;
