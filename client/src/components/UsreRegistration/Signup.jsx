import React from 'react';
import { Input } from "@/components/ui/input"
import Button from '../ui/Button/Button';
import { useForm } from 'react-hook-form';


const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitForm = (data) => {
        const { name, email, password, file } = data
        const image = file[0]
        console.log(image)
        const formData = new FormData()
        formData.append("image", image)
        console.log(formData)

        const userData = { name, email, password, file, role: "user" }
        console.log(userData)
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
                <div>
                    <label htmlFor="text">Name</label>
                    <Input type='text' {...register('name', { required: true })} />
                </div>
                <div>
                    <label htmlFor="image">Upload Profile</label>
                    <Input type='file' {...register('file')} />
                </div>
                <button className='px-5 py-3 w-full bg-blue-400 rounded-full mt-4 text-white font-bold' type='submit'>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
