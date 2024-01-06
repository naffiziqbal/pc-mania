import React, { useEffect, useState } from 'react';
import { Input } from '../ui/input';
import { getAllProducts } from '@/utils/APIs';

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
        <div className={` duration-500 w-screen min-h-20 shadow-xl  z-50 bg-white absolute max_viewport ${isSearchOpen ? "bottom-0" : " bottom-40"}`}>
            <div className='flex mx-auto flex-col outline-none'>
                <Input className='w-3/4 h-full focus-visible:ring-0 border-x-0 border-t-0 rounded-none' placeholder="What's on Your Mind ?"
                    value={searchTerm}
                    onChange={handleSearch}
                />

                <div className='min-h-fit absolute w-screen top-10 bg-white duration-700'>
                    {/* <ul>
                        {searchResults.map((result) => (
                            <li key={result._id}>{result}</li>
                        ))}
                    </ul> */}
                    {
                        searchResults.map(data => <div key={data._id}>{data.name}</div>)
                    }
                </div>
            </div>
            <span className='absolute md:top-5 md:right-5 top-0 right-10 border p-1 rounded-full h-8 w-8 text-center' onClick={() => setIsSearchOpen(!isSearchOpen)}>
                X
            </span>
        </div >
    );
};

export default Search;
