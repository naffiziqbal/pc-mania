// spell-checker:disable;
import PaymentMethode from '@/components/PaymentMethodes/PaymentMethode';
import Button from '@/components/ui/Button/Button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CLEAR_CART } from '@/redux/product/cartSlice';
import { createOrder, makeOrder } from '@/utils/APIs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoCartOutline, } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

const Checkout = () => {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch()
    const [itemsTotal, setItemsTotal] = useState(0)
    const { orders, user } = useSelector(state => state)
    const [selectCard, setSelectCard] = useState(null)

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

    const handleCheckout = async (address) => {
        // alert('Order Placed')
        console.log(address)

        try {
            const { data } = await createOrder({ userId: user?.user?._id, orderItems: orders?.orders, })
            console.log(data, " ORder Create")
            toast('Order Has Successfully Been placed')
            localStorage.clear('cart')
            dispatch(CLEAR_CART([]))
        } catch (err) {
            toast(err.message)
        }


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
    return (
        <div className='my-5'>
            {
                user?.user?._id && orders?.orders?.length ? <div className='flex md:flex-row gap-3 flex-col'>
                    <div className='md:w-2/3 w-full'>
                        <section className=' flex justify-between drop-shadow-lg shadow-3xl  shadow-slate-400 rounded-lg p-2 h-fit overflow-hidden'>
                            <div className={`w-full address`}>
                                <p className='text-xl mb-2'>Enter Your Address Details</p>
                                <form className='*:leading-8'>
                                    <lable for="fname">
                                        <span> First Name </span>
                                        <Input className="focus-visible:ring-0" type='text'
                                            {...register('firstName')}
                                            defaultValue={user?.user?.name}
                                            placeholder={"Your First Name "} required />
                                    </lable>
                                    <lable for="lname">
                                        <span>  Last Name</span>
                                        <Input className="focus-visible:ring-0" type='text'
                                            {...register('lastName')}
                                            defaultValue={user.user?.LastName}
                                            placeholder={"Your Last Name"} required />
                                    </lable>
                                    <lable type="number" for="phone">
                                        <span> Contact  No.</span>

                                        <Input className="focus-visible:ring-0"
                                            defaultValue={user?.contacat}
                                            {...register('contact')}
                                            placeholder={"Your Contact"} required />
                                    </lable>
                                    <lable type='text' for="district">
                                        <span>  District</span>

                                        <Input className="focus-visible:ring-0"
                                            {...register('district')}
                                            placeholder={"Your District "} required />
                                    </lable>
                                    <lable type='text' for="city">
                                        <span> City </span>

                                        <Input className="focus-visible:ring-0"
                                            {...register('city')}
                                            placeholder={"Your City "} required />
                                    </lable>
                                    <lable type="number" for="zip">
                                        <span>  ZIP or postal code</span>

                                        <Input className="focus-visible:ring-0"
                                            {...register('zip')}
                                            placeholder={"Your Zip No."} required />
                                    </lable>
                                    <lable type='text' for="full-add">
                                        <span> Your Full Address </span>

                                        <Input className="focus-visible:ring-0"    {...register('adress')}
                                            placeholder={"House no, Street name"} required />
                                    </lable>
                                </form>
                            </div>

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
                        <Button data="Place Order" action={handleSubmit(handleCheckout)} />
                    </div>
                </div> : <div className='flex flex-row  gap-5 items-center'> <span>Please Select a Product to order</span>
                    <Link href={'/cart'}><IoCartOutline className='w-12 h-12 text-blue-600' /></Link>
                </div>
            }
        </div>
    );
};

export default Checkout;
