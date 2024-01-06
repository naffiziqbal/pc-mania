import React from 'react';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { loginUser } from '@/utils/APIs';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setIsLoading, setUser } from '@/redux/user/UserSlice';


const Signup = () => {
    const dispatch = useDispatch()
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
        } catch (error) {
            console.log(error)
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

                <button className='px-5 py-3 w-full bg-blue-400 rounded-full mt-4 text-white font-bold' type='submit'>Login</button>
            </form>
        </div>
    );
};

export default Signup;
