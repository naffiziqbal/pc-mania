
import ProductReviews from '@/components/Reviews/ProductReviews';
import SignUpModal from '@/components/modal/SignUpModal';
import ProductDetail from '@/components/products/ProductDetail';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { Add_TO_CART } from '@/redux/product/cartSlice';
import { useGetReviewsQuery } from '@/redux/product/review/reviewApi';
import { setIsModalOpen } from '@/redux/user/UserSlice';
import { addToLocalStorage } from '@/utils/handleLocalStorage';
import { HeartIcon } from 'lucide-react';
import Image from "next/legacy/image";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const ProductDetails = ({ product }) => {
    const { user, isModalOpen } = useSelector(state => state.user)
    const dispatch = useAppDispatch()
    const { data } = product
    const [quantity, setQuantity] = useState(1)
    const { _id, name, image, description, price } = data

    const { data: review } = useGetReviewsQuery(_id)
    console.log(review?.data)

    const handleCart = (e) => {
        e.preventDefault()
        dispatch(Add_TO_CART({ ...data, quantity: quantity }))
        addToLocalStorage({
            ...data, quantity: quantity
        })
    }
    const handleModalOpen = () => {
        dispatch(setIsModalOpen(!isModalOpen))
    }

    return (
        <div>
            {isModalOpen && <SignUpModal />}
            <div className={` ${isModalOpen ? "blur-lg backdrop-brightness-50 " : null}`}>

                <div className={`flex md:flex-row flex-col w-full justify-between`}>
                    <Image className='w-fit max-w-1/2 object-contain' src={image} width={600} height={600} alt='' />
                    <div className='md:w-1/2 w-full '>
                        <h3 className='text-3xl'>{name}</h3>
                        <div className='h-24  w-full pt-2 flex justify-between'>
                            <div className='w-3/4 flex *:mr-2 text-xs'>
                                <p id='reviews'>Total Reviews</p> |
                                <p id='questions'>Answred Questions</p>
                            </div>
                            <div className='w-fit'>
                                <HeartIcon />
                            </div>
                        </div>
                        <hr />
                        <p className='mt-4 text-4xl'>${price}</p>
                        <div className='flex items-center mt-5'>
                            <label htmlFor="quantity" className='w-fit h-fit bg-[#f5f7f7] p-3'>Quantity</label>
                            <div className='flex items-center'>
                                <input type="number"
                                    name='itemQuantity'
                                    readOnly
                                    value={quantity}
                                    className='p-3 border outline-none w-full hover:cursor-not-allowed' />
                                <button
                                    className='w-fit h-fit border text-2xl font-bold py-2 px-5 hover:bg-[#f5f5f7]  duration-300*:
                        mx-2'
                                    onClick={() => setQuantity(quantity > 1 ? quantity - 1 : null)}
                                > &minus; </button>
                                <button
                                    className=' w-fit h-fit border text-xl font-bold py-2 px-5 hover:bg-[#f5f5f7] duration-300 *:
                        mx-2'
                                    onClick={() => { setQuantity(quantity + 1) }}
                                >
                                    &#43;
                                </button>
                            </div>
                        </div>
                        <div className='flex mt-5  w-fit gap-5 p-3 *:text-xl font-semibold *:duration-300'>
                            <button className='w-1/2 text-nowrap bg-blue-400 py-3 px-5 items-center text-white rounded-full hover:bg-black border '
                                onClick={user?._id ? handleCart : handleModalOpen}
                            >Add to Cart</button>
                            <button className='w-1/2 md:w-full text-nowrap border py-3 px-5 items-center  rounded-full hover:bg-black hover:text-white'>Buy Now</button>
                        </div>
                    </div>

                </div >
                <ProductReviews data={review?.data} />
                <ProductDetail product={product} />
            </div>
        </div>
    );
};

export default ProductDetails;




export const getStaticPaths = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
    const { data } = await res.json()
    data?.map(data => ({ params: { id: data?._id } }))

    return {
        paths: data?.map(data => ({ params: { id: data?._id } })),
        fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.id
    // const id = `658baf00e219e5b67cbb810a`
    const data = await fetch(`https://pc-mania.vercel.app/api/v1/product/${id}`)
    const product = await data.json()
    return {
        props: {
            product
        }
    }
}
