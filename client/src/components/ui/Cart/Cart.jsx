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
import { useEffect } from "react";
import { useSelector } from "react-redux";


const Cart = () => {

    useEffect(() => {
        const data = getLocalStorageCart()
        console.log(data)
    }, [])

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent Purchased.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">INV001</TableCell>
                        <TableCell>Paid</TableCell>
                        <TableCell>Credit Card</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default Cart;

