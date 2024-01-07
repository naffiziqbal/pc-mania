import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { getAllProducts } from '@/utils/APIs';
import Link from 'next/link';
import Image from 'next/image';

const Search = ({ setIsSearchOpen, isSearchOpen }) => {
    const [products, setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const { data } = await getAllProducts()
            console.log(data.data)
            setProducts(data?.data)
        }
        getProducts()
    }, [isSearchOpen])

    const handleSearch = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Perform search and update results
        const results = products.filter(item => item?.name.includes(term || term.toLowerCase() || term.toUpperCase()))
        setSearchResults(results);
    };
    console.log(searchResults)
    return (
        <div className={` duration-500 w-screen min-h-20 shadow-xl  z-50 bg-white absolute max_viewport ${isSearchOpen ? "bottom-0" : " bottom-[100rem]"}`}>
            <div className='flex mx-auto flex-col outline-none'>
                <Input className='w-3/4 h-full focus-visible:ring-0 border-x-0 border-t-0 rounded-none' placeholder="What's on Your Mind ?"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                <div className='min-h-fit max-h-96 overflow-y-auto overflow-hidden absolute w-full top-10 bg-white duration-700'>
                    {/* <ul>
                        {searchResults.map((result) => (
                            <li key={result._id}>{result}</li>
                        ))}
                    </ul> */}
                    {searchTerm &&
                        searchResults.map(data => <Link href={`/product/${data._id}`} className='flex gap-3 border  min-h-fit duration-700 hover:text-blue-500' key={data._id}>
                            <Image src={data?.image} alt='product-image' width={100} height={100} />
                            <p >{data?.name}</p>
                        </Link>)
                    }
                </div>
            </div>
            <span className='absolute md:top-1 md:right-5 top-0 right-10 border p-1 rounded-full h-8 w-8 text-center' onClick={() => setIsSearchOpen(!isSearchOpen)}>
                X
            </span>
        </div >
    );
};

export default Search;
