import Image from "next/image";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { format, render } from 'timeago.js'
import { CgUnavailable } from "react-icons/cg";
import styles from '@/styles/Product.module.css'
import Link from "next/link";


const NewProducts = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product


    // Get 1 hour form Current Time
    const timeAgoFromNow = Date.now() - 7 * 24 * 60 * 60 * 1000

    // Formating time into Human Readable


    const productCriationTimeStamp = new Date(createdAt).getTime()
    console.log(productCriationTimeStamp)



    return (
        <>
            {productCriationTimeStamp > timeAgoFromNow &&
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
                </div >}
        </>
    );
};

export default NewProducts;
