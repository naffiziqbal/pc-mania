import { Settings } from 'lucide-react';
import React from 'react';

const Maintainance = () => {
    return (
        <div className=' h-screen text-xl md:text-6xl font-bold flex flex-col uppercase'>
            <h1>The page you&apos;re trying to visit is Under Development </h1>
            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Settings className='h-24 w-24 text-blue-500 animate-spin duration-3000 ' />
            </span>
        </div>
    );
};

export default Maintainance;
