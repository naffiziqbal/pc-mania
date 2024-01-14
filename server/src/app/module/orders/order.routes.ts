import { Router } from "express";
import { OrderController } from "./order.controller";

const orderRoute = Router()


orderRoute.post('/create-order', OrderController.createOrder)
orderRoute.get('/all-orders', OrderController.getAllOrders)


export default orderRoute
