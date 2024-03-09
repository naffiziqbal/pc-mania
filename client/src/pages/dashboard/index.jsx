import DashboadLayout from '@/components/Dashboard/DashboadLayout';
import Image from 'next/image';
import { CgDollar } from 'react-icons/cg';
import { useSelector } from 'react-redux';
import saleImage from '../../../public/balance-c2e80db3.webp';

/*  <>
            {
                user.role === "user" ? <UserView user={user} /> : <AdminView user={user} />}
        </> */

const date = new Date().toUTCString().slice(0, 16);

const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    // console.log(user)
    return (
        <div className='w-full mt-12 md:mt-0 text-white'>
            <div className='min-h-16 py-2 rounded bg-blue-500 text-white px-3 font-bold w-full flex justify-between flex-wrap items-center shadow-sm'><h3 className='text-3xl md:text-4xl'>Pc Mania Analytic</h3>
                <section>
                    {date}
                </section>
            </div>

            <section className=''>
                <div className='flex flex-col lg:flex-row  *:bg-blue-500 *:rounded min-h-40 mt-6 *:p-5 gap-3'>

                    <div className='w-full flex md:flex-row flex-col justify-between gap-3 overflow-hidden'>
                        <section className='h-full min-w-52 w-full min-h-40 shadow-inner bg-blue-800 rounded-lg flex items-center justify-center'>
                            <Image src={saleImage} height={100} width={100} alt='s' />
                        </section>
                        <section>
                            <h3 className='text-3xl font-bold uppercase'>Pc Mania - Retail</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, amet!</p>

                            <h4 className='text-2xl mt-4 font-bold'>Average Rate 2024</h4>
                            <section className='flex flex-row items-center gap-3'>

                                <div className='flex items-center text-xl font-bold'>
                                    <CgDollar className='bg-green-600 p-3 w-12 h-12 rounded-md mr-3' />
                                    <section>
                                        ${Math.floor(Math.random() * 100000)}
                                    </section>
                                </div>
                                <div className='flex  items-center text-xl font-bold'>
                                    <CgDollar className='bg-green-600 p-3 w-12 h-12 rounded-md mr-3' />
                                    <section>
                                        ${Math.floor(Math.random() * 100000)}
                                    </section>
                                </div>
                                <div className='flex items-center text-xl font-bold'>
                                    <CgDollar className='bg-green-600 p-3 w-12 h-12 rounded-md mr-3' />
                                    <section>
                                        ${Math.floor(Math.random() * 100000)}
                                    </section>
                                </div>

                            </section>
                        </section>
                    </div>
                    <div className='lg:w-fit w-full min-w-32 flex flex-row items-center justify-center bg-gradient-to-br from-pink-300 to-indigo-400 gap-2'>
                        <section className=''>
                            <Image src={saleImage} height={200} width={200} alt='s' />
                        </section>
                        <p className='font-bold text-xl text-balance '>Total balance ${Math.floor(Math.random() * 10)}K</p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row *:bg-blue-400 *:rounded min-h-40 mt-6 *:p-3 gap-3'>
                    <div className='md:w-2/3 w-full'>a</div>
                    <div className='w-full'>a</div>
                </div>

            </section>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboadLayout>
        {page}
    </DashboadLayout>
}
