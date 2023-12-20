import { Router } from "express";
import { UserController } from "./user.controller";

const routes = Router();

routes.post("/create-user", UserController.createUser);
routes.get("/all-users", UserController.getAllUser);

export const UserRouter = routes;
