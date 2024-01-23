
import { IdeliveredOrder } from "../shared/interface"
import { DeliveredOrder } from "./deliveredOrder.schema"

const deliveredOrderDB = async ({ orderId, orderDetails }: IdeliveredOrder) => {
    try {
        const data = await DeliveredOrder.create({ orderId, orderDetails })
        return data
    } catch (err: any) {
        return err.message
    }
}

const getAllDeliveredOrderFromDB = async () => {
    try {
        const data = await DeliveredOrder.find({})
        return data
    }
    catch (err: any) {
        return err.message
    }
}

export const deliveredServices = { deliveredOrderDB, getAllDeliveredOrderFromDB }
