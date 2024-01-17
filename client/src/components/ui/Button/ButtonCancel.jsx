import React from 'react';
import { toast } from 'sonner';

const ButtonCancel = () => {
    const handleCancel = () => {
        // ? Dispatch Cancel Order Function
        toast("Under Developement")
    }
    return (
        <button className='px-3 py-1 border bg-transparent text-red-600 rounded-xl text-xs hover:bg-red-600 hover:text-white duration-300'
            onClick={handleCancel}
        >
            Cancel
        </button>
    );
};

export default ButtonCancel;
