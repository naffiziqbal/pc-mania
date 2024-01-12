import { PenBoxIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SharedProfileUI = ({ user }) => {
    return (
        <div>
            <div className='flex gap-4 flex-col max-w-sm'>
                <Image src={user?.image} className='rounded-full' alt="name" width={200} height={170} />
                <div className='relative'>
                    <PenBoxIcon className='absolute right-0 hover:cursor-pointer' />
                    <h4 className='text-xl'>{user?.name}</h4>
                    <h4>{user?.email}</h4>
                </div>
                <p className='absolute text-xs border rounded-full tracking-wide px-2  bg-blue-500 text-white'>{user?.role}</p>
            </div>
        </div>
    );
};

export default SharedProfileUI;
