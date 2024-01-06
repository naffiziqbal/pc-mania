import React from 'react';
import { Input } from "@/components/ui/input"
import { useForm } from 'react-hook-form';
import { loginUser } from '@/utils/APIs';


const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitForm = async (data) => {
        const { name, email } = data
        // console.log(data)
        try {
            const user = await loginUser(data)
            console.log(user)
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
