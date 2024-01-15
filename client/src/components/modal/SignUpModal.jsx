import React from 'react';
import Signup from '../UsreRegistration/Signup';
import Login from '../UsreRegistration/Login';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { setIsModalOpen } from '@/redux/user/UserSlice';

const SignUpModal = () => {
    const { isModalOpen } = useSelector(state => state.user)
    const dispatch = useDispatch()

    return (
        <div className='absolute z-50 w-full md:w-1/3 max-w-lg  h-fit p-4 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f7f7f7] duration-300'>
            <h2 className='text-center text-xl text-bold'>Please Log In To View</h2>
            <p className=' flex justify-center items-center absolute top-0 right-0  text-xl rounded-full border w-8 h-8 m-2 cursor-pointer text-center duration-3000'
                onClick={() => dispatch(setIsModalOpen(!isModalOpen))}
            >x</p>
            <div className='duration-3000'>
                {
                    isModalOpen && <Login />
                }
            </div>
            <p>Don&apos;t have an Account? <Link className='text-blue-600' href={'/registration'}>Sign up</Link></p>
        </div>
    );
};

export default SignUpModal;
