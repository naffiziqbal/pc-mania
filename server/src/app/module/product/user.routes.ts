import { Router } from "express";
import { ProductController } from "./product.controller";

const routes = Router();

routes.post("/create-product", ProductController.createProduct);
routes.get("/all-products", ProductController.getProducts);
routes.get("/:id", ProductController.getSigngleProduct);

export const ProductRoutes = routes;
