import Button from '@/components/ui/Button/Button';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({ product }) => {
    const { data } = product
    const [quantity, setQuantity] = useState(1)
    const { _id, name, image, description, price } = data
    const [userReview, setUserReview] = useState([])
    useEffect(() => {
        const getUserReview = async () => {
            const data = await fetch(`${process.env.SERVER_URL}/review/${_id}`)
            const review = await data.json()
            setUserReview(review)
        }
        getUserReview()
    }, [_id])
    console.log(data)

    return (
        <div className='flex flex-row'>
            <Image src={image} width={300} height={400} alt='' />
            <div className='w-full'>
                <h3 className='text-3xl'>{name}</h3>
                <div className='h-24  w-full pt-2'>
                    review Section
                </div>
                <hr />
                <p className='mt-4 text-4xl'>${price}</p>
                <div>
                    <label htmlFor="quantity" className='w-fit h-fit bg-[#f5f7f7] p-3'>Quantity</label>
                    <input type="number" value={quantity} onChange={() => setQuantity(quantity + 1)} className='border mt-12 p-2 outline-none mr-12' />
                    <div className='flex'>
                        <Button data={"Add To Cart"} />
                        <Button data={"Buy Now"} />
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
