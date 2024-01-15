import { Schema, model } from "mongoose";
import { IReview } from "../shared/interface";

const reviewSchema = new Schema<IReview>(
  {
    productId: {
      type: String,
      required: true,
    },
    reviewerId: {
      type: String,
      required: true,
    },
    reviewerName: {
      type: String,
      required: true
    },

    reviewerImage: {
      type: String,
      required: true
    },
    ratingPoint: {
      type: Number,
      required: true
    },

    reviewerEmail: {
      type: String,
      required: true
    },
    reviewerMessage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Review = model<IReview>("Review", reviewSchema);
