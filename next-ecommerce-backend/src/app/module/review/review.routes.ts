import { Router } from "express";
import { ReviewController } from "./review.controller";

const routes = Router();

routes.post("/create-review", ReviewController.createReview);

export const ReviewRoutes = routes;
