import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgUnavailable } from 'react-icons/cg';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

const CategoryWiseProduct = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product
    return (
        <div>
            <div
                className={`p-3 min-w-fit w-fit border rounded-md bg-white
                        ${styles.body}
                        `}>


                <Link href={`/product/${_id}`}>
                    <div>
                        {stock ?
                            <span className="mb-2 flex justify-end items-center *:mx-1 w-full">< IoCheckmarkCircleOutline style={{ color: "green" }} />In stock</span>
                            : <CgUnavailable style={{ color: "red" }} />}
                    </div>
                    <Image className="h-52 max-w-60 min-w-60 "
                        src={image}
                        alt="product-image"
                        width={200}
                        height={300}
                    />
                    <span>{review}</span>
                    <p>{name}</p>
                    <p>{price}</p>
                </Link>


            </div >
        </div>
    );
};

export default CategoryWiseProduct;
