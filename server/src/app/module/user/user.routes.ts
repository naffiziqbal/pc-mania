import { Router } from "express";
import { UserController } from "./user.controller";

const routes = Router();

routes.post("/create-user", UserController.createUser);
routes.post("/login", UserController.userLogin);
routes.post("/:id", UserController.SingleUser);
routes.get("/all-users", UserController.getAllUser);

export const UserRouter = routes;
