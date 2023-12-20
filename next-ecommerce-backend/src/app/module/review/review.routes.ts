import { Router } from "express";
import { ReviewController } from "./review.controller";

const routes = Router();

routes.post("/create-review", ReviewController.createReview);
routes.get("/all-review", ReviewController.getAllReview);
routes.get("/product-review", ReviewController.getProductReview);

export const ReviewRoutes = routes;
