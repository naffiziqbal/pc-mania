import express from "express";
import cors from "cors";
import { ProductRoutes } from "./module/product/user.routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/product", ProductRoutes);

export default app;
