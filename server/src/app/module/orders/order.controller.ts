import { RequestHandler } from "express";
import { OrderServices } from "./order.services";
import ejs from 'ejs';
import path from 'path'

const createOrder: RequestHandler = async (req, res) => {
    const { userId, orderItems, userDetails } = req.body
    // console.log(userId, orderItems, userDetails, "Order Data Before")
    try {
        const data = await OrderServices.createOrderToDb({ userId, orderItems, userDetails })
        console.log(data, "Order Controller")
        if (data) {
            res.status(200).json({
                success: true,
                data,
                message: "Order Placed Successfully"
            })
        }
        else {
            throw new Error("Order Creation Failed")
        }

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

const getSingleOrder: RequestHandler = async (req, res) => {
    try {
        const { id } = req.params
        const data = await OrderServices.getSingleOrderFromDb(id)
        res.status(200).json({
            data,
        })
    } catch (error: any) {
        res.status(401).json({
            success: false,
            message: error.message
        })

    }
}
export const OrderController = { createOrder, getAllOrders, getSingleOrder }
