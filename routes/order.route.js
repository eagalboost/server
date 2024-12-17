import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createOrder,
  getOrderById,
  getOrders,
  getOrdersCount,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:serviceId", verifyToken, createOrder);
router.get("/", verifyToken, getOrders);
router.get("/count", verifyToken, getOrdersCount);
router.get("/:orderId", verifyToken, getOrderById);

export default router;
