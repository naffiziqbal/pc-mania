import { cancelOrder } from '@/utils/APIs';
import React from 'react';
import { toast } from 'sonner';


const ButtonCancel = ({ id, name }) => {
    const handleCancel = async () => {
        // ? Dispatch Cancel Order Function
        toast(name)
        try {
            await cancelOrder(id)
            toast('cancel order', name)
        } catch (err) {
            toast(err.message)
        }

    }
    return (
        <button className='py-1 px-4 font-bold border bg-transparent text-red-600 rounded-xl text-xs hover:bg-red-600 hover:text-white duration-300'
            onClick={handleCancel}
        >
            Cancel
        </button>
    );
};

export default ButtonCancel;
