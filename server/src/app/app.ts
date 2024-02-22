import express from "express";
import cors from "cors";
import { ProductRoutes } from "./module/product/product.routes";
import { ReviewRoutes } from "./module/review/review.routes";
import { UserRouter } from "./module/user/user.routes";
import orderRoute from "./module/orders/order.routes";
import deliveredRouter from "./module/delivered/delivered.routes";
import CancelOrderRouter from "./module/cancel/cancel.routes";


const corsOptions = {
    origin: ["http://localhost:3000", 'https://pcmania.vercel.app'],
    credentials: true,
    optionsSuccessStatus: 200
}


const app = express();
app.use(cors());


app.use(express.json());
app.use("/api/v1/product", ProductRoutes);
app.use("/api/v1/review", ReviewRoutes);
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/delivered", deliveredRouter);
app.use("/api/v1/cancel", CancelOrderRouter);

export default app;
