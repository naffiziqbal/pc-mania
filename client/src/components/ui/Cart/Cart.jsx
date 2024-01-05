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
import { DeleteIcon, Trash2Icon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Cart = () => {
    const [cartItem, setCartItem] = useState([])
    // console.log(cartItem)
    useEffect(() => {
        const data = getLocalStorageCart()
        // console.log(data)
        setCartItem(data)
    }, [])
    const handleDeleteProduct = (id) => {
        if (id) {
            const newCart = cartItem.filter(data => data._id !== id)
            localStorage.setItem('cart', JSON.stringify(newCart))
            setCartItem(newCart)
            // console.log(newCart)
        } else {
            // console.log('else')
            localStorage.removeItem('cart')
            setCartItem([])
        }
    }

    const content = cartItem.map(data => <TableBody key={data._id}>
        <TableRow>
            <TableCell className="font-medium">
                <Image src={data.image} alt="image" width={100} height={100} />
            </TableCell>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.quantity}</TableCell>
            <TableCell>{data.price}</TableCell>
            <TableCell className="text-right">{data.price * data.quantity}</TableCell>
            <TableCell>
                <Trash2Icon onClick={() => handleDeleteProduct(data?._id)} />
            </TableCell>
        </TableRow>
    </TableBody>)
    // console.log(content)
    return (
        <><Head>
            <title>Cart</title>
        </Head>
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
                            <TableHead>
                                <Trash2Icon onClick={() => handleDeleteProduct()} />
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    {content}
                </Table> : <div className=" h-96 justify-center items-center flex"><span className="text-3xl">Please Add Some Product First...</span>
                    <span className="text-blue-400 mt-2 mx-2 underline"><Link href='/'>Back to home</Link></span>
                </div>}
            </div>
        </>
    );
};

export default Cart;

