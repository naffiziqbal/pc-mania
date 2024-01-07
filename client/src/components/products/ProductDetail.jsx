import Image from 'next/image';
import React from 'react';

const ProductDetail = ({ product }) => {
    const specifications = {
        processor: [
            { model: "Normal Processor Can Pc Hold" },
            { brand: "Brand" },
            { thread: "16" },
            { frequency: "3.2 GHz up to 4.7 GHz" },
            { core: '8' },

            { "L1 Cahce": '512kb' },
            { "L1 Cahce": '4MB' },
            { "L1 Cahce": '16MB' }


        ],
        chipset: 'AMD SoC Platform',
        display: [
            { size: "16\"" },
            { type: "IPS" },
            { resoulation: "WQXGA (2560x1600)" },
            { touch: false },
            { hrz: " 165hz" },
            { features: "500nits Anti-glare, 100% sRGB, 165Hz, DisplayHDR 400, Dolby Vision, FreeSync, G-SYNC, Low Blue Light, High Gaming Performance" }
        ],
        storage: [
            { type: "M.2 2280 PCIe 4.0x4 NVMe" },
            { capacity: "1TB" },
            { extra: "Two M.2 2280 PCIe 4.0 x4 slots" }
        ],
        graphics: [
            { model: "NVIDIA GeForce RTX 3070" },
            { memory: "8GB" },
            { type: "DDR4" }
        ]
    }
    const { data } = product
    console.log(product)
    const { _id, name, image, description, price } = data

    return (
        <div className='px-2'>
            <p className='text-lg'>Product Details of <strong>{name}</strong></p>
            <Image src={image} width={600} height={600} layout='responsive' alt={name} />
            <div>
                <p className='text-xl font-semibold'>Specifications `Dummy Content`</p>
                <section>
                    <ul>
                        <li className='h-12 bg-[#f5f5f7] text-blue-500 font-semibold'>Procesor</li>
                        <section >
                            {specifications.processor.map((data, id) => <li className='h-12 flex justify-between px-3 my-1 hover:bg-[#f6f6f5] border-x-0 border border-t-0 duration-300' key={id}>
                                <span className='uppercase text-xs max-w-1/2 w-fit'> {Object.keys(data)}</span><span className='font-semibold w-1/2'>{Object.values(data)}</span>
                            </li>)}
                        </section>

                        <li className='h-12 bg-[#f5f5f7] text-blue-500 font-semibold'>Chipset</li>
                        <section className='h-12 flex justify-between px-3 my-1 hover:bg-[#f6f6f5] border-x-0 border border-t-0 duration-300'>
                            <span className='uppercase text-xs max-w-1/2 w-fit'>Chipset</span>
                            <span className='font-semibold w-1/2'>{specifications.chipset}</span>
                        </section>
                        <li className='h-12 bg-[#f5f5f7] text-blue-500 font-semibold'>Display</li>
                        <section >
                            {specifications.display.map((data, id) => <li className='h-12 flex justify-between px-3 my-1 hover:bg-[#f6f6f5] border-x-0 border border-t-0 duration-300' key={id}>
                                <span className='uppercase text-xs max-w-1/2 w-fit'> {Object.keys(data)}</span><span className='font-semibold w-1/2'>{Object.values(data)}</span>
                            </li>)}
                        </section>
                        <li className='h-12 bg-[#f5f5f7] text-blue-500 font-semibold'>Storage</li>
                        <section >
                            {specifications.storage.map((data, id) => <li className='h-12 flex justify-between px-3 my-1 hover:bg-[#f6f6f5] border-x-0 border border-t-0 duration-300' key={id}>
                                <span className='uppercase text-xs max-w-1/2 w-fit'> {Object.keys(data)}</span><span className='font-semibold w-1/2'>{Object.values(data)}</span>
                            </li>)}
                        </section>
                        <li className='h-12 bg-[#f5f5f7] text-blue-500 font-semibold'>Graphics</li>
                        <section >
                            {specifications.graphics.map((data, id) => <li className='h-12 flex justify-between px-3 my-1 hover:bg-[#f6f6f5] border-x-0 border border-t-0 duration-300' key={id}>
                                <span className='uppercase text-xs max-w-1/2 w-fit'> {Object.keys(data)}</span><span className='font-semibold w-1/2'>{Object.values(data)}</span>
                            </li>)}
                        </section>
                    </ul>
                </section>
            </div>
            <div >
                <p className='text-xl font-semibold'> Description</p>
                {description}</div>
        </div >
    );
};

export default ProductDetail;
