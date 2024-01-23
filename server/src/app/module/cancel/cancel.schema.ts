import { Schema, model } from "mongoose";
import { ICancelOrder } from "../shared/interface";

const CancelOroderSchema = new Schema<ICancelOrder>({
    userId: { type: String, required: true },
    orderDetails: { type: {}, required: true }
},
    { timestamps: true }
)


export const CancelOrder = model<ICancelOrder>("CancelOrder", CancelOroderSchema)
