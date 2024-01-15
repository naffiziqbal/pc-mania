import AdminView from '@/components/Dashboard/Admin/AdminView';
import DashboadLayout from '@/components/Dashboard/DashboadLayout';
import UserView from '@/components/Dashboard/user/UserView';
import { PenBoxIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    // console.log(user)
    return (
        <>
            {
                user.role === "user" ? <UserView user={user} /> : <AdminView user={user} />}
        </>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboadLayout>
        {page}
    </DashboadLayout>
}
