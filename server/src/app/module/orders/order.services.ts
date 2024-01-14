import { IOrder } from "../shared/interface"
import { Order } from "./orders.schema"

const createOrderToDb = async ({ userId, orderItems }: IOrder) => {

    try {
        const data: any = await Order.create({ userId, orderItems })
        return data

    } catch (err) {
        return err
    }
}

const getAllOrdersFromDb = async () => {
    try {
        const data = Order.find({})
        return data
    } catch (err) { return err }
}

export const OrderServices = { createOrderToDb, getAllOrdersFromDb }
