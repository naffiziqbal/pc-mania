import DashboadLayout from '@/components/Dashboard/DashboadLayout';
import { useSelector } from 'react-redux';
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
