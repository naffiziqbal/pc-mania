import { RequestHandler } from "express";
import { CancelOrderService } from "./cancel.services";

const cancelOrder: RequestHandler = async (req, res) => {
    try {
        const { orderDetails } = req.body
        const userId = req.params.id
        const data = await CancelOrderService.createCancelOrder({ userId, orderDetails })
        res.status(200).json({
            success: true,
            data
        })
    } catch (err: any) {
        res.send(err.message)
    }
}

const getAllCanceledOrder: RequestHandler = async (req, res) => {
    try {
        const data = await CancelOrderService.getAllCancelOrder()
        res.status(200).json({
            success: true,
            data
        })
    }
    catch (err: any) {
        res.send(err.message)
    }
}
const getSingleCanceledOrder: RequestHandler = async (req, res) => {
    const userId = req.params.id
    try {
        const data = await CancelOrderService.getSingleCancelOrderFromDb(userId)
        res.status(200).json({
            success: true,
            data
        })
    }
    catch (err: any) {
        res.send(err.message)
    }
}


export const cancelOrderController = { getAllCanceledOrder, cancelOrder, getSingleCanceledOrder }
