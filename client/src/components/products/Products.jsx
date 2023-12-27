import NewProducts from "./NewProducts";

const Products = ({ products }) => {
    console.log(products)
    return (
        <>
            {products?.map(product => <NewProducts key={product._id} product={product} />)}
        </>
    );
};

export default Products;
