import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const new_products = ({ products }) => {
    
    return (
        <div>
            {
                products?.map(data => <div key={data._id}>
                    <div
                        className={`m-2 p-2 min-w-fit w-full  flex items-center justify-center  hover:border-blue-400 hover:shadow-3xl hover:border duration-300 hover:scale-105 rounded-md 
                        
                        `}>
                        <Link href={`/product/${data?._id}`}>
                            <div className="flex justify-center items-center">
                                {data.stock ?
                                    <span className="mb-2 flex justify-end items-center *:mx-1 w-full">< IoCheckmarkCircleOutline style={{ color: "green" }} />In stock</span>
                                    : <CgUnavailable style={{ color: "red" }} />}
                            </div>
                            <Image
                                className="h-52 w-40  items-center flex justify-center  aspect-[2/3] object-contain mix-blend-color-burn"
                                src={data.image}
                                alt="product-image"
                                width={220}
                                height={200}
                            />
                            <span>{data.review}</span>
                            <p>{data.name}</p>
                            <p>{data.price}</p>
                            <p>{ }</p>
                        </Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default new_products;



export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}

