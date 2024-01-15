import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react';


const DashboadLayout = ({ children }) => {
    const { user } = useSelector(state => state.user)
    // console.log(user)
    return (
        <>
            {user._id ?
                <div className='flex gap-x-3'>
                    <div className='md:w-1/3 max-w-1/3 border-y-0 md:border h-screen border-l-0 *:md:m-0 *:-ml-96'>
                        <Sidebar />
                    </div>
                    <div className='md:hidden absolute right-0'>
                        <Sheet className='text-red-400 absolute'>
                            <SheetTrigger>
                                <MenuIcon />
                            </SheetTrigger>
                            <SheetContent className='bg-[#F5F7FF]'>
                                <Sidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                    {children}
                </div> : <div> Please <span className='underline hover:text-blue-600 text-xl duration-300'><Link href={'/registration'}>Login</Link></span> To View</div>
            }
        </>
    );
};

export default DashboadLayout;
