import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
const DashboadLayout = ({ children }) => {
    const { user, isLoading } = useSelector(state => state.user)
    console.log(user)
    const router = useRouter()
    return (
        <>
            {user._id ?
                <div className='flex gap-5'>
                    <div className='w-1/3 border-y-0 border h-screen border-l-0'>
                        <Sidebar />
                    </div>
                    {children}
                </div> : <div> Please <span className='underline hover:text-blue-600 text-xl duration-300'><Link href={'/registration'}>Login</Link></span> To View</div>
            }
        </>
    );
};

export default DashboadLayout;
