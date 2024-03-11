import Image from 'next/image';
import React from 'react';
import Products from '../products/Products';

const TopProducts = ({ products }) => {
    const date = new Date().toUTCString().slice(0, 16);
    const categories = products.map(product => product.category)

    const filterdCategories = categories.filter((category, index) => categories.indexOf(category) === index)
    // console.log(filterdCategories)

    return (
        <div>
            <div className='text-white bg-blue-500 min-h-16 rounded px-4 flex justify-between w-full items-center'>
                <h3 className='text-4xl font-bold'>Top Products</h3>
                <p className='font-bold'> {date}</p>
            </div>


            {/* Products Analytics */}
            <div className='flex *:bg-blue-500 text-white *:shadow-sm hover:*:shadow *:shadow-blue-500 hover:*:scale-95 *:duration-300 gap-5 *:p-3 my-4 *:rounded-md md:flex-row flex-col  flex-wrap'>
                <div className='flex flex-1  flex-col min-w-96'>
                    <h3 className='md:text-3xl text-xl my-4 font-semibold'>Top Sales by Categories</h3>
                    <div className='flex flex-col  gap-4'>
                        <div className='w-full'>
                            {
                                filterdCategories.map(category => {
                                    return <div key={category} className='flex flex-row justify-between font-bold 
                                     [&:nth-child(odd)]:bg-[#b4b4b41a] p-2 rounded-sm text-lg'>
                                        <h4 className='capitalize'>
                                            {category}
                                        </h4>
                                        <p>${Math.floor(Math.random() * 1000)}K</p>
                                    </div>
                                })}
                        </div>
                    </div>
                </div>
                {
                    filterdCategories.map(category => <div key={category} className='min-w-32 overflow-hidden'>
                        <div className=''>
                            <figure className='w-full'><Image src={"https://unsplash.it/400"} width={200} height={200} alt='60' className='w-fit h-full  rounded shadow-inner' /></figure>
                            <section className='font-bold mt-5 w-full flex  md:justify-between flex-col md:flex-row capitalize text-xl mb-2'>
                                <p>{category}</p>
                                <p> {Math.floor(Math.random() * 1000)}K</p>
                            </section>
                        </div>
                    </div>)
                }
            </div>
            <div className='my-6'>
                <h3 className='text-2xl font-bold'>Accessories</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                    {
                        products?.filter(data => data.category.toLowerCase() === 'accessories')
                            ?.map(product => <Products key={product?._id} product={product} />)
                    }
                </div>
            </div>
            <div className='my-6'>
                <h3 className='text-2xl font-bold'>Custom Pc</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                    {
                        products?.filter(data => data.category.toLowerCase() === 'pc')
                            ?.map(product => <Products key={product?._id} product={product} />)
                    }
                </div>
            </div>
            <div className='my-6'>
                <h3 className='text-2xl font-bold'>Laptop</h3>
                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 px-4">
                    {
                        products?.filter(data => data.category.toLowerCase() === 'laptop')
                            ?.map(product => <Products key={product?._id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default TopProducts;
