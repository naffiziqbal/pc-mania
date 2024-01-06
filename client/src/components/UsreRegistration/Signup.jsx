import React from 'react';
import { Input } from "@/components/ui/input"
import Button from '../ui/Button/Button';
import { useForm } from 'react-hook-form';
import { signUpUser } from '@/utils/APIs';
import { useDispatch } from 'react-redux';
import { setUser } from '@/redux/user/UserSlice';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { toast } from 'sonner';


const Signup = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors },
    } = useForm()

    const onSubmitForm = async (udata) => {
        const { name, email, password, file } = udata
        const image = file[0]
        // console.log(image)
        const formData = new FormData()
        formData.append("image", image)
        console.log(formData)
        /* 
        * Make a API request to upload the image to imgbb 
        * Get  returnd Link 
        * Attach it to the UserData 
        * send data to backend to Register User
        */

        const userData = { name, email, password, image: 'https://i.ibb.co/jrBQF5s/ape-7020995-1280.png', role: "user" }
        // console.log(userData)
        try {
            const { data } = await signUpUser(userData)
            dispatch(setUser(data.data))
            // console.log(data)
            Cookies.set('uid', data?.data?._id)
            router.push('/')
        } catch (error) {
            // console.log(error)
            toast(error?.response?.data?.message || "User Creation Failed")
        }
    }
    return (
        <div className='px-2 pb-4 h-fit'>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input type='email' {...register('email', { required: true })} />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Input type='password' {...register('password', { required: true }, { minLength: 4 })} />
                    {errors.password && <p>{errors.password.message}</p>}
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
