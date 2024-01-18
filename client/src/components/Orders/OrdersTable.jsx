import React from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import ButtonCancel from '../ui/Button/ButtonCancel';
import Image from 'next/image';

const OrdersTable = ({ orders }) => {
    const tableContent = <TableBody>
        {
            orders?.map(data => data?.orderItems?.map((items, idx) => <TableRow key={idx}>
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
            </TableRow>))}
    </TableBody>
    return (
        <div>
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Cancel</TableHead>
                    </TableRow>
                </TableHeader>
                {tableContent}
            </Table>
        </div>
    );
};

export default OrdersTable;
