import { getOrdersById } from '@/utils/APIs';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ButtonCancel from '@/components/ui/Button/ButtonCancel';


const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        const allOrders = async () => {
            const { data } = await getOrdersById(user?._id)
            setOrders(data?.data)
            console.log(data.data)
        }
        allOrders()
    }, [user._id])
    const content =
        orders.slice(0, 200)?.map(data => data?.orderItems?.map((items, idx) => <TableBody key={idx}>
            <TableRow>
                <TableCell>
                    <Image src={items?.image} alt='image' height={100} width={100} />
                </TableCell>
                <TableCell>
                    <h3 className='text-lg font-bold'>{items.name}</h3>
                </TableCell>
                <TableCell>
                    <p>{items?.quantity}</p>
                </TableCell>
                <TableCell>
                    <ButtonCancel />
                </TableCell>
            </TableRow>
        </TableBody>))

    return (
        <div className='overflow-y-scroll w-full max-h-96'>
            <p>Pending Delivery {orders.length}</p>
            <Table>
                <TableCaption className='font-semibold'>Your ordered items.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead >Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead >Cancel</TableHead>
                    </TableRow>
                </TableHeader>
                {content}
            </Table>
        </div>
    );
};

export default Orders;


