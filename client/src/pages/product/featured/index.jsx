import NewProductCarousel from '@/components/ProductCarousel/NewProductCarousel';
import NewProducts from '@/components/products/NewProducts';
import Products from '@/components/products/Products';
import Head from 'next/head';
import React from 'react';

const LaptopPage = ({ products }) => {
    return (
        <>
            <Head>
                <title>Featured Product</title>
                <meta name='description' content='Released This Week' />
            </Head>
            <div className="container  mx-auto">
                <section className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold my-5">New Arival</h3>
                </section>
                <NewProductCarousel products={products} />

            </div>
        </>
    );
};

export default LaptopPage;

export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}
