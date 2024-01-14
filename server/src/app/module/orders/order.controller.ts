import { RequestHandler } from "express";
import { OrderServices } from "./order.services";

const createOrder: RequestHandler = async (req, res) => {
    const { userId, orderItems } = req.body
    console.log(userId, orderItems, "Order Data Before")
    try {
        const data = await OrderServices.createOrderToDb({ userId, orderItems })
        res.status(200).json({
            success: true,
            data,
            message: "Order Has Been Created Successfully"
        })
    } catch (error) {
        res.send(error)
    }

}
const getAllOrders: RequestHandler = async (req, res) => {
    try {
        const data = await OrderServices.getAllOrdersFromDb()
        console.log(data, "controller")
        res.status(200).json({
            data,

        })
    } catch (error) {
        res.send(error)
    }
}

export const OrderController = { createOrder, getAllOrders }
