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
import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button/Button";
import { AddOders } from "@/redux/product/order/orderSlice";
import { useRouter } from "next/router";
import { data } from "autoprefixer";


const Cart = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [cartItem, setCartItem] = useState([])
    console.log(cartItem)
    const { user } = useSelector(state => state.user)
    useEffect(() => {
        const data = getLocalStorageCart()
        // console.log(data)
        setCartItem(data)
        return () => {
            setCartItem([])
        }
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

    const handleCheckout = () => {
        dispatch(AddOders(cartItem))
        router.push('/checkout')
    }
    return (
        <><Head>
            <title>Cart</title>
        </Head>
            {
                user?._id ? <div>
                    {cartItem.length ? <>
                        <Table>
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
                        </Table>
                        {/* ================================= */}
                        {/* Button */}
                        <Button data={'Procced To Checkout'} action={handleCheckout} />
                    </> : <div className=" h-96 justify-center items-center flex"><span className="text-3xl">Please Add Some Product First...</span>
                        <span className="text-blue-400 mt-2 mx-2 underline"><Link href='/'>Back to home</Link></span>
                    </div>}
                </div> : <div> Please Login To Interact With this page</div>
            }
        </>
    );
};

export default Cart;

