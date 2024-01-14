import { IOrder } from "../shared/interface"
import { Order } from "./orders.schema"

const createOrderToDb = async ({ userId, orderItems }: IOrder) => {

    try {
        const data = await Order.create({ userId, orderItems })
        console.log(data, "create Order DB")
        return data
    } catch (err) {
        return err
    }
}

const getAllOrdersFromDb = async () => {
    try {
        const data = Order.find({ userId: "659960f97d06dfec6d312edf" })
        return data
    } catch (err) { return err }
}

export const OrderServices = { createOrderToDb, getAllOrdersFromDb }
