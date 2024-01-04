import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { getLocalStorageCart } from "@/utils/handleLocalStorage";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Cart = () => {
    const [cartItem, setCartItem] = useState([])

    useEffect(() => {
        const data = getLocalStorageCart()
        // console.log(data)
        setCartItem(data)
    }, [])

    const content = cartItem.map(data => <TableBody key={data._id}>
        <TableRow>
            <TableCell className="font-medium">
                <Image src={data.image} alt="image" width={100} height={100} />
            </TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.quantity}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell className="text-right">{data.price * data.quantity}</TableCell>
        </TableRow>
    </TableBody>)
    // console.log(content)
    return (
        <div>
            {cartItem.length ? <Table>
                <TableCaption>A list of your  Cart.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="text-right">Total Amount</TableHead>
                    </TableRow>
                </TableHeader>
                {content}
            </Table> : <div className=" h-96 justify-center items-center flex"><span className="text-3xl">Please Add Some Product First...</span>
                <span className="text-blue-400 mt-2 mx-2 underline"><Link href='/'>Back to home</Link></span>
            </div>}
        </div>
    );
};

export default Cart;

