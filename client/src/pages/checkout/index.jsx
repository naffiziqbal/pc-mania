import PaymentMethode from '@/components/PaymentMethodes/PaymentMethode';
import Button from '@/components/ui/Button/Button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Edit, Edit2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { IoCart, IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const router = useRouter()
    const [itemsTotal, setItemsTotal] = useState(0)
    const { orders, user } = useSelector(state => state)
    const [selectCard, setSelectCard] = useState(null)
    console.log(user.user)
    // console.log(orders.orders)
    useEffect(() => {
        const price = orders?.orders?.map(data => parseInt(data.price * data?.quantity))
        const itemsTotal = price?.reduce((a, b) => a + b, 0)
        setItemsTotal(itemsTotal)
    }, [orders])
    const content = orders?.orders?.map(data => <TableBody key={data._id}>
        <TableRow>
            <TableCell className="font-medium">
                <Image src={data.image} alt="image" width={100} height={100} />
            </TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.quantity}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell className="text-right">{data.price * data.quantity}</TableCell>
        </TableRow>
    </TableBody>)

    const handleCheckout = () => {
        alert('Order Placed')
    }

    const paymentObj = [
        {
            'Items Total': itemsTotal,
        }, {
            "Delivery Fee": 50
        },
        {
            "Discount": "N/A"
        },
        {
            "Total Payment": itemsTotal + 50
        }
    ]
    console.log(selectCard, " But in Checkout Page")
    return (
        <div className='my-5'>
            {
                user?.user?._id && orders?.orders?.length ? <div className='flex md:flex-row gap-3 flex-col'>
                    <div className='md:w-2/3 w-full'>
                        <section className=' flex justify-between h-32 drop-shadow-lg shadow-3xl  shadow-slate-400 rounded-lg p-2'>
                            <section>
                                {
                                    user?.user?.address?.map(data => <span className='flex gap-2' key={data.Zip}>
                                        {Object.keys(data)} {Object.values(data)}
                                    </span>)
                                }
                            </section>
                            <Edit className='text-blue-600 hover:cursor-pointer' />

                        </section>
                        <section className='shadow-3xl p-2 rounded-md mt-10'>

                            <Table key=''>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Image</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead className="text-right">Total Amount</TableHead>
                                    </TableRow>
                                </TableHeader>
                                {content}
                            </Table>

                        </section >
                    </div >
                    <div className=' min-h-52 h-fit w-full md:w-1/3 shadow-3xl p-3 rounded-md'>
                        <h5 className='font-bold'>Order Summary</h5>
                        <section className='w-full text-start'>
                            <ul>
                                {
                                    paymentObj.map(data => <li key={''} className='flex justify-between my-2 shadow-sm'><span>
                                        {Object.keys(data)}</span> <span>{Object.values(data)}</span></li>)
                                }
                            </ul>
                        </section>
                        <PaymentMethode selectCard={selectCard} setSelectCard={setSelectCard} />
                        <Button data="Place Order" action={handleCheckout} />
                    </div>
                </div> : <div className='flex flex-row  gap-5 items-center'> <span>Please Select a Product to order</span>
                    <Link href={'/cart'}><IoCartOutline className='w-12 h-12 text-blue-600' /></Link>
                </div>
            }
        </div>
    );
};

export default Checkout;
