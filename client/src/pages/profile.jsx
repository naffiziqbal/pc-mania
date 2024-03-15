import DashboardLayout from '@/components/Dashboard/DashboadLayout';
import React from 'react';

const Profile = () => {
    return (
        <div>
            This Is Profile
        </div>
    );
};
export default Profile;

Profile.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}

