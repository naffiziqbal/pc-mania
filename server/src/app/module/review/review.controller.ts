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
  } catch (err: any) {
    res.status(500).json({ message: err.message });
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
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getProductReview: RequestHandler = async (req, res) => {
  console.log(req.params.id);
  const productId = req.params.id;
  try {
    const data = await ReviewServices.getProductReviewFromDb(productId);
    res.status(200).json({ data });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getReviewById: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id
    const data = await ReviewServices.getReviewByIdFromDb(id)
    res.status(200).json({ data })
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

export const ReviewController = {
  createReview,
  getAllReview,
  getProductReview,
  getReviewById
};
