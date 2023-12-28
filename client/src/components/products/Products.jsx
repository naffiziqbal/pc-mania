import Swiper from "swiper";
import NewProducts from "./NewProducts";

const Products = ({ products }) => {
    return (

        <div className="my-12">
            <h3 className="text-2xl font-semibold my-5">New Products</h3>
            <div className="flex gap-3 overflow-x-auto">
                {products?.map(product => <NewProducts key={product?._id} product={product} />)}</div>

        </div>
    );
};

export default Products;
