"use client"
import React from 'react';
import Sidebar from './Sidebar';

const DashboadLayout = ({ children }) => {
    return (
        <div className='flex'>
            <div className='w-1/3 border-y-0 border h-screen border-l-0'>
                <Sidebar />
            </div>
            {children}
        </div>
    );
};

export default DashboadLayout;
