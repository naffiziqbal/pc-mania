import Image from 'next/image';
import { useSelector } from 'react-redux';
import saleImage from '../../../public/balance-c2e80db3.webp';
import BarsDataset from '@/components/Chart/Chart';
import DashTable from '@/components/Dashboard/Table/Table';
import DashboardLayout from '@/components/Dashboard/DashboadLayout';

/*  <>
            {
                user.role === "user" ? <UserView user={user} /> : <AdminView user={user} />}
        </> */

const date = new Date().toUTCString().slice(0, 16);

const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    // console.log(user)
    return (
        <div className='mt-12 lg:mt-0 '>
            {/* Analytics =============================================*/}
            <div className='text-white bg-blue-500 min-h-16 rounded px-4 flex justify-between w-full items-center'>
                <h3 className='text-4xl font-bold'>Pc Mania Analytics</h3>
                <p className='font-bold'> {date}</p>
            </div>
            <section className='text-white'>
                <div className='flex flex-col lg:flex-row  *:bg-blue-500 *:rounded min-h-40 mt-6 *:p-5 gap-3'>

                    {/* SaleOverView ====================================*/}
                    <div className='lg:w-fit w-full flex md:flex-row flex-col gap-3 overflow-hidden flex-1'>
                        <section className='h-full min-w-22 w-fit px-4 min-h-40 shadow-inner bg-blue-800 rounded-lg flex items-center justify-center'>
                            <Image src={saleImage} height={100} width={100} alt='s' />
                        </section>
                        <section>
                            <h3 className='text-3xl font-bold uppercase'>Pc Mania - Retail</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet!</p>

                            <h4 className='text-xl mt-4 font-bold'>Average Rate 2024</h4>
                            <section className='flex flex-row items-center gap-3 w-full justify-between'>

                                <div className='flex items-center'>
                                    <section>
                                        <p className='text-3xl font-semibold'>${Math.floor(Math.random() * 100000)}</p>
                                        <p className='font-semibold text-green-400'>Income</p>
                                    </section>
                                </div>
                                <div className='flex  items-center'>
                                    <section>
                                        <p className='text-3xl font-semibold'>${Math.floor(Math.random() * 100000)}</p>
                                        <p className='font-semibold text-red-600'>Expenses</p>
                                    </section>
                                </div>
                                <div className='flex  items-center'>
                                    <section>
                                        <p className='text-3xl font-semibold'>{Math.floor(Math.random() * 10000)}</p>
                                        <p className='font-semibold text-gray-600'>New Orders</p>
                                    </section>
                                </div>

                            </section>
                        </section>
                    </div>
                    {/* Total ====================================*/}
                    <div className='lg:w-fit px-2 w-full flex flex-row items-center justify-center bg-gradient-to-br from-pink-300 to-indigo-400 gap-2'>
                        <section className=''>
                            <Image src={saleImage} height={100} width={100} alt='s' />
                        </section>
                        <p className='font-bold text-xl text-balance '>Total balance ${Math.floor(Math.random() * 10)}K</p>
                    </div>

                    {/* Chart ====================================*/}
                </div>
                <div className='flex flex-col md:flex-row *:bg-blue-400 *:rounded min-h-40 mt-6 *:p-3 gap-3'>
                    <div className='w-full overflow-x-scroll'>
                        <BarsDataset />
                    </div>
                </div>
            </section>

            {/*  Data Table */}
            <section className='my-4'>
                <h2 className='text-3xl'>Products List</h2>
                <DashTable />
            </section>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboardLayout>
        {page}
    </DashboardLayout>
}
