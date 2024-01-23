import { IOrder, IdeliveredOrder } from "../shared/interface"
import { DeliveredOrder } from "../delivered/deliveredOrder.schema"
import { Order } from "./orders.schema"

const createOrderToDb = async ({ userId, orderItems, userDetails }: IOrder) => {
    try {
        const data = await Order.create({ userId, orderItems, userDetails })
        console.log("Order Data", data)
        if (data) { return data }
        else { throw new Error("Order Creation Failed") }
    } catch (err: any) {
        return err.message
    }
}

const getAllOrdersFromDb = async () => {
    try {
        const data = Order.find({})
        return data
    } catch (err) { return err }
}
const getSingleOrderFromDb = async (id: string) => {
    const data = await Order.find({ userId: id })
    console.log(data, " Single Order from Service")
    return data
}





export const OrderServices = { createOrderToDb, getAllOrdersFromDb, getSingleOrderFromDb }
