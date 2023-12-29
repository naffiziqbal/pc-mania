import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const Products = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product

    return (
        <div
            className={`m-2 p-2 min-w-fit w-full  flex items-center justify-center  hover:border-blue-400 hover:border duration-300 hover:scale-105 rounded-md 
                        
                        `}>
            <Link href={`/product/${_id}`}>
                <div className="flex justify-center items-center">
                    {stock ?
                        <span className="mb-2 flex justify-end items-center *:mx-1 w-full">< IoCheckmarkCircleOutline style={{ color: "green" }} />In stock</span>
                        : <CgUnavailable style={{ color: "red" }} />}
                </div>
                <Image className="h-52 w-fit min-w-40"
                    src={image}
                    alt="product-image"
                    width={500}
                    height={100}
                />
                <span>{review}</span>
                <p>{name}</p>
                <p>{price}</p>
            </Link>


        </div>
    );
};

export default Products;
