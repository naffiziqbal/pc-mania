import DashboadLayout from '@/components/Dashboard/DashboadLayout';
import { PenBoxIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const Dashboard = () => {
    const { user } = useSelector(state => state.user)
    console.log(user)
    return (
        <div className='h-fit flex flex-col w-full'>
            <div className='flex gap-4 flex-col max-w-sm'>
                <Image src={user?.image} className='rounded-full' alt="name" width={200} height={170} />
                <div className='relative'>
                    <PenBoxIcon className='absolute right-0 hover:cursor-pointer' />
                    <h4 className='text-xl'>{user?.name}</h4>
                    <h4>{user?.email}</h4>
                </div>
                <p className='absolute text-xs border rounded-full tracking-wide px-2  bg-blue-500 text-white'>{user?.role}</p>
            </div>
            <hr className='border w-full' />
            <div>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Top Orders</h4>
                    <Link href={'/dashboard/orders'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Orders</div>

                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>
                        My Wishlists
                    </h4>
                    <Link href={'/dashboard/wishlist'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Wishlisted Product</div>
                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Cancelation</h4>
                    <Link href={'/dashboard/cancels'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>

                    <div>This Field Will Show Last Three Cancelation</div>

                </section>
                <section className='grid grid-cols-2 gap-5'>
                    <h4 className='text-xl font-semibold'>My Reviews</h4>
                    <Link href={'/dashboard/reviews'}>
                        <span className='underline hover:text-blue-500 duration-300 font-semibold'>See more</span>
                    </Link>
                    <div>This Field Will Show Last Three Reviews</div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return <DashboadLayout>
        {page}
    </DashboadLayout>
}
