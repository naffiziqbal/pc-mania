import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';


const DashboardLayout = ({ children }) => {
    const { user } = useSelector(state => state.user)
    // console.log(user)
    return (
        <>
            {user._id ?
                <div className='flex gap-x-3'>
                    <div className='lg:min-w-[20rem] border-y-0 md:border min-h-screen border-l-0 *:lg:m-0 *:-ml-96'>
                        <Sidebar />
                    </div>
                    <div className='lg:hidden absolute right-0'>
                        <Sheet className='text-red-400 absolute'>
                            <SheetTrigger>
                                <MenuIcon />
                            </SheetTrigger>
                            <SheetContent className='bg-[#F5F7FF]'>
                                <Sidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                    <div className='w-full mb-4  overflow-auto h-screen'>
                        {children}
                    </div>
                </div> : <div> Please <span className='underline hover:text-blue-600 text-xl duration-300'><Link href={'/registration'}>Login</Link></span> To View</div>
            }
        </>
    );
};

export default DashboardLayout;
