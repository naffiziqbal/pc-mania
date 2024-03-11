import DashboardLayout from '@/components/Dashboard/DashboadLayout';
import React from 'react';
import TopProducts from '@/components/Dashboard/TopProducts';

const topProducts = ({ products }) => {
    console.log(products)
    return (
        <div>
            <TopProducts products={products} />
        </div>
    );
};

export default topProducts;


export const getStaticProps = async () => {
    const res = await fetch(`https://pc-mania.vercel.app/api/v1/product/all-products`)
    const data = await res.json()
    return {
        props: {
            products: data?.data
        }
    }
}





topProducts.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}
