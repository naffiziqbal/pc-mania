import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProductDetails = ({ product }) => {
    const { data } = product
    const { name, image, description, price } = data
    const [userReview, setUserReview] = useState([])
    // useEffect(() => {
    //     const getUserReview = async () => { 

    //     }
    // }, [])
    console.log(data)

    return (
        <div>
            <Image src={data.image} width={300} height={400} alt='' />
            <div>
                <h3>{name}</h3>
                <div>
                    review Secttion
                </div>
                <p>{description}</p>
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
