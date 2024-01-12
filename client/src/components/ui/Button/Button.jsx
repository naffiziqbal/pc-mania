import React from 'react';

const Button = ({ data, action }) => {
    return (
        <button
            onClick={action}
            className='mt-12 md:w-fit p-3 w-1/2 text-sm md:text-md border-blue-400 text-blue-400 border-2 rounded-full font-semibold hover:bg-blue-400 hover:text-white duration-300 hover:border-white hover:border-2'>{data}</button>
    );
};

export default Button;
