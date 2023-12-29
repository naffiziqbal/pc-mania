import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { format, render } from 'timeago.js'
import { CgUnavailable } from "react-icons/cg";
import Link from "next/link";

import { SwiperSlide } from "swiper/react";


const NewProducts = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product


    // Get 1 hour form Current Time
    const timeAgoFromNow = Date.now() - 7 * 24 * 60 * 60 * 1000

    // Formating time into Human Readable


    const productCriationTimeStamp = new Date(createdAt).getTime()



    return (
        <>
            {productCriationTimeStamp > timeAgoFromNow &&

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

            }
        </>
    );
};

export default NewProducts;
