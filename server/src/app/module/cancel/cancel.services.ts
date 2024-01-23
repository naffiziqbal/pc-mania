import { ICancelOrder } from "../shared/interface";
import { CancelOrder } from "./cancel.schema";

const createCancelOrder = async ({ userId, orderDetails }: ICancelOrder) => {
    try {
        const data = await CancelOrder.create({ userId, orderDetails })
        return data
    } catch (err: any) {
        return err.message
    }
}

const getAllCancelOrder = async () => {
    try {
        const data = await CancelOrder.find({})
        return data

    } catch (error: any) {
        return error.message
    }
}


const CancelOroderService = { createCancelOrder, getAllCancelOrder }
