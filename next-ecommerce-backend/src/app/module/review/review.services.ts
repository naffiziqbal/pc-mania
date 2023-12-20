import { IReview } from "../shared/interface";
import { Review } from "./review.schema";

const createReviewToDb = async (review: IReview) => {
  const data = await Review.create(review);
  return data;
};

const getAllReviewFromDb = async () => {
  const data = await Review.find({});
  return data;
};
export const ReviewServices = { createReviewToDb, getAllReviewFromDb };
