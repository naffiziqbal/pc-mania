import Button from '@/components/ui/Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({ product }) => {
    const { data } = product
    const [quantity, setQuantity] = useState(1)
    const { _id, name, image, description, price } = data
    const [userReview, setUserReview] = useState([])
    // useEffect(() => {
    //     const getUserReview = async () => {
    //         const data = await fetch(`${process.env.SERVER_URL}/review/${_id}`)
    //         const review = await data.json()
    //         setUserReview(review)
    //     }
    //     getUserReview()
    // }, [_id])
    console.log(data)

    return (
        <div className='flex md:flex-row flex-col w-full justify-between'>
            <Image className='w-fit max-w-1/2' src={image} width={400} height={400} layout='fixed' alt='' />
            <div className='w-1/2'>
                <h3 className='text-3xl'>{name}</h3>
                <div className='h-24  w-full pt-2'>
                    review Section
                </div>
                <hr />
                <p className='mt-4 text-4xl'>${price}</p>
                <div className='flex items-center mt-5'>
                    <label htmlFor="quantity" className='w-fit h-fit bg-[#f5f7f7] p-3'>Quantity</label>
                    <div className='flex items-center'>
                        <input type="number" value={quantity} className='p-3 border outline-none' />
                        <button className=' w-fit h-fit border text-2xl font-bold py-2 px-5 hover:bg-[#f5f5f7]  duration-300*:
                        mx-2'
                            onClick={() => setQuantity(quantity - 1)}
                        >-</button>
                        <button className=' w-fit h-fit border text-xl font-bold py-2 px-5 hover:bg-[#f5f5f7] duration-300 *:
                        mx-2'
                            onClick={() => { setQuantity(quantity + 1) }}
                        >+</button>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default ProductDetails;




export const getStaticPaths = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
    const { data } = await res.json()
    console.log(data?.map(data => ({ params: { id: data?._id } })))

    return {
        paths: data?.map(data => ({ params: { id: data?._id } })),
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id
    console.log(id)
    // const id = `658baf00e219e5b67cbb810a`
    const data = await fetch(`https://pc-mania.vercel.app/api/v1/product/${id}`)
    console.log(data)
    const product = await data.json()
    return {
        props: {
            product
        }
    }
}
