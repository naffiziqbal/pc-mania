import Image from "next/legacy/image";

import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { CgUnavailable } from "react-icons/cg";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const NewProducts = ({ product }) => {
    const { _id, name, image, price, stock, review, createdAt } = product


    // Get 1 hour form Current Time
    const timeAgoFromNow = Date.now() - 30 * 24 * 60 * 60 * 1000
    // Formating time into Human Readable
    const productCriationTimeStamp = new Date(createdAt).getTime()



    return (
        <>
            <CarouselItem className="md:basis-1/4 basis-1/2">
                {productCriationTimeStamp > timeAgoFromNow ?
                    <div
                        className={`m-6 p-2 max-h-fit min-w-fit w-full flex items-center justify-center  hover:border-blue-400 hover:shadow-3xl hover:border duration-300 hover:scale-105 rounded-md 
                        
                        `}>
                        <Link href={`/product/${_id}`}>
                            <div className="flex justify-center items-center">
                                {stock ?
                                    <span className="mb-2 flex justify-end items-center *:mx-1 w-full">< IoCheckmarkCircleOutline style={{ color: "green" }} />In stock</span>
                                    : <CgUnavailable style={{ color: "red" }} />}
                            </div>
                            <Image className="w-fit min-w-40"
                                src={image}
                                alt="product-image"
                                width={500}
                                height={500}
                            />
                            <span>{review}</span>
                            <p>{name}</p>
                            <p>{price}</p>
                        </Link>


                    </div>
                    : <div className="bg-[#F5F7FF] mb-2 w-fit p-4">No New Arivals This Week</div>
                }


            </CarouselItem >

        </>
    );
};

export default NewProducts;
