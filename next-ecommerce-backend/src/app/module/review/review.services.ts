import { IReview } from "../shared/interface";
import { Review } from "./review.schema";

const createReviewToDb = async (review: IReview) => {
  const data = await Review.create(review);
  return data;
};

export const ReviewServices = { createReviewToDb };
