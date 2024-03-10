import AddProducts from '@/components/Dashboard/Admin/AddPorducts/AddProducts';
import DashboardLayout from '@/components/Dashboard/DashboadLayout';
import React from 'react';

const addProducts = () => {
    return (
        <div className='flex justify-center items-center'>
            <AddProducts />
        </div>
    );
};

export default addProducts;

addProducts.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}

