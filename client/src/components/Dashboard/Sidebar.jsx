import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { user } = useSelector(state => state.user)
    return (
        <div className='bg-[#F5F7FF] leading-9 h-full p-3 '>

            {
                user.role === 'user' && <div className='flex flex-col'>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-bold'>Account Dashboard</h3>
                        <Link href="/dashboard/profile">Account Information</Link>
                        <Link href="/dashboard/address">Adress Book</Link>
                        <Link href="/dashboard/orders">My Orders</Link>
                        <hr />
                        <Link href="/dashboard/wishlist">My Wishlist</Link>
                        <Link href="/dashboard/returns">My Returns</Link>
                        <Link href="/dashboard/reviews">My Reviews</Link>
                    </div>
                </div>
            }

            {
                user?.role === 'admin' && <div className='flex flex-col'>
                    <Link href="/dashboard/profile">My Profile</Link>
                    <Link href="/dashboard/orders">My Orders</Link>
                    <Link href="/dashboard/returns">My Returns</Link>
                    <Link href="/dashboard/wishlist">My Wishlist</Link>
                </div>
            }
        </div>

    )
};

export default Sidebar;
