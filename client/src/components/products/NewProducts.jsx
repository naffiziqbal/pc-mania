import Image from "next/image";
import { format, render } from 'timeago.js'

const NewProducts = ({ product }) => {
    const { name, image, price, stock, review, createdAt } = product

    // Get 1 hour form Current Time
    const timeAgoFromNow = Date.now() - 1 * 24 * 60 * 60 * 1000

    // Formating time into Human Readable


    const productCreationTimeStamp = new Date(createdAt).getTime()
    console.log(productCreationTimeStamp)



    return (
        <div>
            {productCreationTimeStamp > timeAgoFromNow && <div>
                <span>{stock}</span>
                <Image src={image} alt="product-image" width={200} height={300} layout="fixed" />
                <span>{review}</span>
                <p>{name}</p>
                <p>{price}</p>
            </div>}
        </div>
    );
};

export default NewProducts;
