import NewProducts from "./NewProducts";

const Products = ({ products }) => {
    return (
        <>
            {products?.map(product => <NewProducts key={product?._id} product={product} />)}
        </>
    );
};

export default Products;
