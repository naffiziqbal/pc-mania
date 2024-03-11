import { getOrdersById } from '@/utils/APIs';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'sonner';
import OrdersTable from '@/components/Orders/OrdersTable';


const Orders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        const allOrders = async () => {
            try {
                const { data } = await getOrdersById(user?._id)
                setOrders(data?.data)
                console.log(data.data)
            } catch (err) {
                toast(err.message)
            }
        }
        allOrders()
    }, [user._id])

    return (
        <div className='overflow-y-auto w-full max-h-96'>
            <p>Pending Delivery {orders.length}</p>
            <OrdersTable orders={orders} />
        </div>
    );
};

export default Orders;


