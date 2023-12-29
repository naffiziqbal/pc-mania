import NewProducts from '@/components/products/NewProducts';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Desktop = ({ products }) => {

    console.log(products)
    return (
        <div>
            <section className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold my-5">New Products</h3>
                <Link href={'/product/new_products'} className="font-semibold">See More</Link>
            </section>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                {
                    products?.map(product => <NewProducts key={product?._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Desktop;

export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product?category=Custom Pc`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}
