import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import ButtonCancel from '@/components/ui/Button/ButtonCancel';

const DashTable = () => {
    const orders = [
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 1,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 2,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 3,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 4,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 5,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 6,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 7,

        },
        {
            image: "https://unsplash.it/300",
            name: "Laptop",
            quantity: 2,
            _id: 8,

        }
    ]
    const tableContent = <TableBody>
        {
            orders?.slice(0, 5)?.map((items, idx) => <TableRow key={idx}>
                <TableCell>
                    <Image src={items.image} alt='' height={80} width={80} /></TableCell>
                <TableCell>
                    <h3 className='text-lg font-bold'>{items.name}</h3>
                </TableCell>
                <TableCell>
                    <p>{items?.quantity}</p>
                </TableCell>
                <TableCell>
                    <ButtonCancel name={items?.name} id={items?._id} />
                </TableCell>
            </TableRow>)}
    </TableBody>
    return (
        <div>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="">Cancel</TableHead>
                    </TableRow>
                </TableHeader>
                {tableContent}
            </Table>
        </div>
    );
};

export default DashTable;
