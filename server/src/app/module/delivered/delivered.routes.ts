import { Router } from "express";
import { deliveredController } from "./delivered.controller";

const deliveredRouter = Router()

deliveredRouter.get('/all-delivered', deliveredController.getAllDeliveredOrder)
deliveredRouter.get('/', deliveredController.deliveredOrder)



export default deliveredRouter
