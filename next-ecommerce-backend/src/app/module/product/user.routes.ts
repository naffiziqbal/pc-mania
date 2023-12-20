import { Router } from "express";
import { ProductController } from "./product.controller";

const routes = Router();

routes.post("/create-product", ProductController.createProduct);

export const ProductRoutes = routes;
