import { RequestHandler } from "express";
import { OrderServices } from "./order.services";
import ejs from 'ejs';
import path from 'path'

const createOrder: RequestHandler = async (req, res) => {
    const { userId, orderItems } = req.body
    console.log(userId, orderItems, "Order Data Before")
    try {
        const data = await OrderServices.createOrderToDb({ userId, orderItems })
        console.log(data)
        if (data) {
            const invoiceHtml = await ejs.renderFile(path.join(__dirname, './invoice.ejs'), {
                orderId: data?._id,
                product: data?.orderItems?.map((items: any) => items.name),
                totalAmount:
                    data?.orderItems?.map((items: any) => parseInt(items.price) * parseInt(items.quantity)).reduce((a: number, b: number) => a + b, 0)
            })
            res.send(invoiceHtml)
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
        const data = await OrderServices.getSignleOrderFromDb(id)
        res.status(200).json({
            data,
        })
    } catch (error) {

    }
}
export const OrderController = { createOrder, getAllOrders, getSingleOrder }
