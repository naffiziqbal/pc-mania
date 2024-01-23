import { Router } from "express";
import { cancelOrderController } from "./cancel.controller";

const CancelOrderRouter = Router()

CancelOrderRouter.get('/all-canceled-orders', cancelOrderController.getAllCanceledOrder)
CancelOrderRouter.get('/:id', cancelOrderController.getSingleCanceledOrder)
CancelOrderRouter.post('/:id', cancelOrderController.cancelOrder)




export default CancelOrderRouter
