import { IProduct, IReview } from "../shared/interface";
import { Review } from "./review.schema";

const createReviewToDb = async (review: IReview) => {
  const data = await Review.create(review);
  return data;
};

const getAllReviewFromDb = async () => {
  const data = await Review.find({});
  return data;
};

const getProductReviewFromDb = async (productId: string) => {
  const data = await Review.find({ productId });
  return data;
};
const getReviewByIdFromDb = async (id: string) => {
  const data = await Review.find({ reviewerId: id })
  return data
}
export const ReviewServices = {
  createReviewToDb,
  getAllReviewFromDb,
  getProductReviewFromDb,
  getReviewByIdFromDb
};
