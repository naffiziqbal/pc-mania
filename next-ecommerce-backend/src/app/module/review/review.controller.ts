import { RequestHandler } from "express";
import { ReviewServices } from "./review.services";

const createReview: RequestHandler = async (req, res) => {
  const review = req.body;
  console.log(review);
  try {
    const data = await ReviewServices.createReviewToDb(review);
    res.status(200).json({
      success: true,
      message: "Review Submitted",
      data,
    });
  } catch (err) {
    return err;
  }
};
const getAllReview: RequestHandler = async (req, res) => {
  try {
    const data = await ReviewServices.getAllReviewFromDb();
    res.status(200).json({
      success: true,
      message: "All Review",
      data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const ReviewController = { createReview, getAllReview };
