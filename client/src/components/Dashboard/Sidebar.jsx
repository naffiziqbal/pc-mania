import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { user } = useSelector(state => state.user)
    return (
        <div className='bg-[#F5F7FF] leading-9 h-full w-full'>

            {
                user.role === 'user' && <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-bold'>Account Dashboard</h3>
                        <Link href="/dashboard/profile">Account Information</Link>
                        <Link href="/dashboard/orders">My Orders</Link>
                        <hr />
                        <Link href="/dashboard/wishlist">My Wishlist</Link>
                        <Link href="/dashboard/returns">My Returns</Link>
                        <Link href="/dashboard/reviews">My Reviews</Link>
                    </div>
                </div>
            }

            {
                user?.role === 'admin' && <div className='flex flex-col justify-center font-bold *:text-nowrap *:w-full py-1 hover:*:bg-[#cccccc36] *:duration-300 *:px-12 gap-2 py-4'>
                    <Link href="/dashboard">Dashboard</Link>
                    <Link href="/dashboard/add-products">Add Products</Link>
                    <Link href="/dashboard/top-products">Top Products</Link>
                </div>
            }
        </div>

    )
};

export default Sidebar;
