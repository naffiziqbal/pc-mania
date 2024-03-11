import NewProductCarousel from '@/components/ProductCarousel/NewProductCarousel';
import NewProducts from '@/components/products/NewProducts';
import Products from '@/components/products/Products';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Desktop = ({ products }) => {
    return (
        <>
            <Head>
                <title>Desktop</title>
                <meta name='description' content='Get Your Own Pc' />
            </Head>
            <div>
                <section className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold my-5">New Arival</h3>
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
        </>
    );
};

export default Desktop;

export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product?category=pc`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}
