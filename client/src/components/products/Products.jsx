import { useGetReviewsQuery } from "@/redux/product/review/reviewApi";
import Image from "next/legacy/image";
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Products = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product
    console.log(_id)
    return (
        <div
            className={`m-2 p-2 min-w-fit w-full  flex items-center justify-center  hover:border-blue-400 hover:shadow-3xl hover:border duration-300 hover:scale-105 rounded-md 
                        
                        `}>
            <Link href={`/product/${_id}`}>
                <div className="flex justify-center items-center">
                    {stock ?
                        <span className="mb-2 flex justify-end items-center *:mx-1 w-full">< IoCheckmarkCircleOutline style={{ color: "green" }} />In stock</span>
                        : <CgUnavailable style={{ color: "red" }} />}
                </div>
                <Image
                    className="h-52 w-40  items-center flex justify-center  aspect-[2/3] object-contain mix-blend-color-burn"
                    src={image}
                    alt="product-image"
                    width={220}
                    height={200}
                />
                <span>{review}</span>
                <p>{name}</p>
                <p>{price}</p>
                <p>{ }</p>
            </Link>
        </div>
    );
};

export default Products;
