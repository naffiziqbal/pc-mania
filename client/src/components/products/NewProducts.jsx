import Image from "next/image";

const NewProducts = ({ product }) => {
    console.log(product)
    const { name, image, price, stock, review } = product
    return (
        <div>
            <h3>New Products</h3>

            {/* Product card */}
            <div className="bg-red-400">
                <span>{stock}</span>
                <Image className="bg-black" src={`/${image}`} alt="product-image" width={200} height={300} layout="fixed" />
                <span>{review}</span>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default NewProducts;
