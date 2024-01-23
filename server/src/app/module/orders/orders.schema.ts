import { Schema, model } from "mongoose";
import { IOrder } from "../shared/interface";


export const orderSchema = new Schema<IOrder>({
    userId: {
        type: String,
        required: true,
    },
    userDetails: [{
        address: { type: String, required: true },
        city: { type: String, required: true },
        contact: { type: Number, required: true },
        district: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        zip: { type: String, required: true },
    }
    ],
    orderItems: [{
        _id: { type: String, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Boolean, required: true },
        quantity: { type: Number, required: true },
    }]

},
    { timestamps: true }
)


export const Order = model<IOrder>('Order', orderSchema)
