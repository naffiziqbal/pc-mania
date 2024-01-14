import React from 'react';
import Signup from '../UsreRegistration/Signup';
import Login from '../UsreRegistration/Login';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const SignUpModal = () => {
    const { isModalOpen } = useSelector(state => state.user)

    return (
        <div className='absolute z-50 w-1/4 h-fit p-4 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f7f7f7]'>
            <h2 className='text-center text-xl text-bold'>Please Log In To View</h2>
            {
                isModalOpen && <Login />
            }
            <p>Don&apos;t have an Account? <Link className='text-blue-600' href={'/registration'}>Sign up</Link></p>
        </div>
    );
};

export default SignUpModal;
