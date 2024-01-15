import { Router } from "express";
import { ReviewController } from "./review.controller";

const routes = Router();

routes.post("/create-review", ReviewController.createReview);
//? This is All review posted by a user
routes.get("/all-review", ReviewController.getAllReview);
//? Specific Product Review
routes.get("/product-review", ReviewController.getProductReview);
routes.get("/:id", ReviewController.getReviewById);

export const ReviewRoutes = routes;
