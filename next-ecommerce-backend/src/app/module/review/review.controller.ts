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

export const ReviewController = { createReview };
