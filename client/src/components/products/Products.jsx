import Ad from "../ui/Slider/ad/Ad";
import NewProducts from "./NewProducts";

const Products = ({ products }) => {
    console.log(products)
    return (

        <div className="my-12">
            <h3 className="text-2xl font-semibold my-5">New Products</h3>
            <div className="flex gap-3 overflow-x-auto ">
                {
                    products?.map(product => <NewProducts key={product?._id} product={product} />)
                }
            </div>
            <Ad />
            <h3 className="text-2xl font-semibold my-5">Accessories</h3>
            <div className="flex flex-row gap-3 overflow-x-auto">
                {
                    products.filter(data => data.category === 'accessories')
                        ?.map(product => <NewProducts key={product?._id} product={product} />)
                }
            </div>
            <h3 className="text-2xl font-semibold my-5">Laptop</h3>
            <div className="flex flex-row gap-3 overflow-x-auto">
                {
                    products.filter(data => data.category === 'Laptop')
                        ?.map(product => <NewProducts key={product?._id} product={product} />)
                }
            </div>
            <h3 className="text-2xl font-semibold my-5">Custom Pc</h3>

            <div className="flex flex-row gap-3 overflow-x-auto">
                {
                    products.filter(data => data.category === 'Custom Pc')
                        ?.map(product => <NewProducts key={product?._id} product={product} />)
                }
            </div>

        </div>
    );
};

export default Products;
