import React from 'react';

const Button = ({ data, action }) => {
    return (
        <div className='flex justify-center'>
            <button
                onClick={action}
                className='mt-12 max-w-sm  p-3 w-full text-sm md:text-md border-blue-400 text-blue-400 border-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white duration-300 hover:border-white hover:border-2'>{data}</button>
        </div>
    );
};

export default Button;
