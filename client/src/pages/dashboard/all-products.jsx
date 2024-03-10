import DashboardLayout from '@/components/Dashboard/DashboadLayout';
import React from 'react';

const AllProducts = () => {
    return (
        <div>
            This Is all Product Page
        </div>
    );
};

export default AllProducts;
AllProducts.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}
