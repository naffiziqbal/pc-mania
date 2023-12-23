import express from "express";
import cors from "cors";
import { ProductRoutes } from "./module/product/user.routes";
import { ReviewRoutes } from "./module/review/review.routes";
import { UserRouter } from "./module/user/user.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/product", ProductRoutes);
app.use("/api/v1/review", ReviewRoutes);
app.use("/api/v1/user", UserRouter);

export default app;
