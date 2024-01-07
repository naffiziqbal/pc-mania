import DashboadLayout from '@/components/Dashboard/DashboadLayout';
import React from 'react';

const Dashboard = () => {
    return (
        <div className='h-fit'>
            This is Dashboard
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboadLayout>
        {page}
    </DashboadLayout>
}
