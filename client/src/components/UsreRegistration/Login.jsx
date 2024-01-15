import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { loginUser } from '@/utils/APIs';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading, setIsModalOpen, setUser } from '@/redux/user/UserSlice';
import { useRouter } from 'next/router';
import { toast } from 'sonner';


const Signup = () => {
    const dispatch = useDispatch()
    const { isLoading, isModalOpen } = useSelector(state => state.user)
    console.log(isLoading)
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmitForm = async (dataField) => {
        // const { name, email } = dataField
        // // console.log(data)
        try {
            const { data } = await loginUser(dataField)
            dispatch(setIsLoading(true))
            // console.log(data)
            dispatch(setUser(data?.data))
            Cookies.set('uid', data?.data._id)
            // console.log(data?.data?._id)
            dispatch(setIsLoading(false))
            dispatch(setIsModalOpen(false))
            if (router.pathname === '/registration') {
                router.back()
            }

        } catch (error) {
            // console.log(error)
            toast(error?.response?.data?.message || "Email or Password Dosen't match")
        }
    }
    return (
        <div className='px-2 pb-4'>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type='email' {...register('email', { required: true })} />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <Input type='password' {...register('password', { required: true })} />
                </div>

                <button className='px-5 py-3 w-full bg-blue-400 rounded-full mt-4 text-white font-bold' type='submit'>{isLoading ? <span className='text-white bg-red-500'>loading</span> : "Login"}</button>
            </form>
        </div>
    );
};

export default Signup;
