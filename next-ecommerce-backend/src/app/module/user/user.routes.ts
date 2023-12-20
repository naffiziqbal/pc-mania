import { Router } from "express";
import { UserController } from "./user.controller";

const routes = Router();

routes.get("/create-user", UserController.createUser);

export const UserRouter = routes;
