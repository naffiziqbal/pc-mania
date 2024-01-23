// spell-checker: disable
import { Schema, model } from "mongoose";
import { IdeliveredOrder } from "../shared/interface";


export const DeliveredOrderSchema = new Schema<IdeliveredOrder>({
    orderId: {
        type: String,
        required: true
    },
    orderDetails: {
        type: Object,
        required: true
    }

},
    { timestamps: true }
)


export const DeliveredOrder = model<IdeliveredOrder>('DeliveredOrder', DeliveredOrderSchema)
