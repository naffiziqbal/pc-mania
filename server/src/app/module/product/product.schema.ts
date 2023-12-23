import { Schema, model } from "mongoose";
import { IProduct } from "../shared/interface";

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = model<IProduct>("Product", productSchema);
