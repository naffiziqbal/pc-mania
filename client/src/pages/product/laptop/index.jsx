import NewProductCarousel from '@/components/ProductCarousel/NewProductCarousel';
import NewProducts from '@/components/products/NewProducts';
import Products from '@/components/products/Products';
import React from 'react';

const LaptopPage = ({ products }) => {
    return (
        <div>
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">New Arivals</h3>
            </section>
            <NewProductCarousel products={products} />

            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">All Custom Builds</h3>
            </section>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                {
                    products?.map(product => <Products key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default LaptopPage;

export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product?category=Laptop`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}
