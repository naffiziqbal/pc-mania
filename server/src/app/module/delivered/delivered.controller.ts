import { RequestHandler } from "express"
import { deliveredServices } from "./delivered.services"

const deliveredOrder: RequestHandler = async (req, res) => {
    const { orderId, orderDetails } = req.body
    const data = await deliveredServices.deliveredOrderDB({ orderId, orderDetails })
    res.status(200).json({
        success: true,
        data
    })
}

const getAllDeliveredOrder: RequestHandler = async (req, res) => {
    const data = await deliveredServices.getAllDeliveredOrderFromDB()
    res.status(200).json({
        success: true,
        data
    })
}

export const deliveredController = { getAllDeliveredOrder, deliveredOrder }
