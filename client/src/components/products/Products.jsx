import Swiper from "swiper";
import NewProducts from "./NewProducts";

const Products = ({ products }) => {
    return (

        <div className="flex gap-3 mt-12 overflow-x-auto">
            {products?.map(product => <NewProducts key={product?._id} product={product} />)}</div>

    );
};

export default Products;
