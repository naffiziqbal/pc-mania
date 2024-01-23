import express from "express";
import cors from "cors";
import { ProductRoutes } from "./module/product/product.routes";
import { ReviewRoutes } from "./module/review/review.routes";
import { UserRouter } from "./module/user/user.routes";
import orderRoute from "./module/orders/order.routes";
import deliveredRouter from "./module/delivered/delivered.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/product", ProductRoutes);
app.use("/api/v1/review", ReviewRoutes);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/delivered", deliveredRouter);

export default app;
